import axios from 'axios'
import { toast } from 'react-toastify'

export const ApiWithToken = async ({ url, method, data }) => {
  const apiOptions = {
    url,
    method,
    data,
    params: { ...params, Authorization: localStorage.getItem('userToken') },
  }
  try {
    const res = await axios(apiOptions)
    if (data) {
      console.log(res)
    }
  } catch (error) {
    toast.error('Somthing went wrong!')
  }
}
