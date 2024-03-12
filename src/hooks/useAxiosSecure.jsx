import axios from "axios";
const useAxios = axios.create({
  baseURL: "https://media-center-api.vercel.app/api/v1",
});
const useAxiosSecure = () => {
  return useAxios;
};

export default useAxiosSecure;
