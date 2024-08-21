import axios from "axios";
import { useState } from "react";
import { apiConfig } from "../services/ApiConfig";

export const useApi = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = async (endpoint, options) => {
    try {
      setIsLoading(true);

      let apiOptions = { ...options, url: apiConfig[endpoint] };
      if (options?.token) {
        apiOptions.headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        };
      }
      console.log(apiOptions);
      const response = await axios(apiOptions);
      return { response };
    } catch (error) {
      return { error };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, callApi };
};
