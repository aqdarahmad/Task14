import axios from "axios";

export default function Apiservice(baseurl, config = {}) {
  const instance = axios.create({
    baseURL: baseurl,
    headers: {
      "Content-Type": "application/json",
      ...(config.headers || {}),
    },
    ...config,
  });

  this.get = (path, params = {}) =>
    instance.get(path, { params }).then((res) => res.data);

  this.post = (path, data) => instance.post(path, data).then((res) => res.data);

  this.put = (path, data) => instance.put(path, data).then((res) => res.data);

  this.delete = (path) => instance.delete(path).then((res) => res.data);
}
