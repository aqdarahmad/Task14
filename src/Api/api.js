import axios from "axios";


export const createApi = (baseURL, config = {}) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      ...config.headers,
    },
    ...config,
  });

  return {
    get: (path, params = {}) => instance.get(path, { params }).then(res => res.data),
    post: (path, data) => instance.post(path, data).then(res => res.data),
    put: (path, data) => instance.put(path, data).then(res => res.data),
  };
};



export const loginRequest = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:5000/api/login", {
      username,
      password,
    });
  
    return response.data.token;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw new Error("Login failed");
  }
};
