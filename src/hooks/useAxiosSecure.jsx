import axios from "axios";
const useAxios = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});
const useAxiosSecure = () => {
  return useAxios;
};

export default useAxiosSecure;
