// const apiUrl = 'https://brainstarapi.azurewebsites.net'
// const apiUrl = 'https://brainstar.azurewebsites.net/api/v1'
const apiUrl = "http://localhost:8000/api/v1";

export const apiConfig = {
  //auth
  signup: `${apiUrl}/auth/signup`,
  login: `${apiUrl}/auth/login`,

  //students
  student: `${apiUrl}/Student`,
};
