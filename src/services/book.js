import { Axios } from "../config/axios.config";

export const getBooksRequest = (query, page, limit) => {
  return Axios.get(`/search.json?title=${query}&page=${page}&limit=${limit}`);
};

export const getBookRequest = (key) => {
  return Axios.get(`/works/${key}.json`);
};
