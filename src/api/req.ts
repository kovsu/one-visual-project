import axios, { AxiosRequestConfig } from "axios";

// create 相当于浅复制了一个axios
const request = axios.create({
  baseURL: "http://10.161.91.93:5000/",
});

export default <T>(config: AxiosRequestConfig) => {
  return request(config).then((res) => {
    return res.data as T;
  });
};
