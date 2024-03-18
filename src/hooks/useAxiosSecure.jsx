import axios from "axios";

const useAxiosSecure = () => {
  return axios.create({
    baseURL: "https://media-center-api.vercel.app/api/v1",
  });
};

export default useAxiosSecure;
