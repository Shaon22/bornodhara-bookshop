import axios from "axios";

export const axiosPublic=axios.create({
    baseURL:'https://bornodhara-bookshop-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;