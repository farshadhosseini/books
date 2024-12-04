import axios from "axios";

const url = "https://openlibrary.org";

export const Axios = axios.create({
  baseURL: url,
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.code === "ERR_NETWORK") {
      return Promise.reject("Network Error");
    }
  }
);
