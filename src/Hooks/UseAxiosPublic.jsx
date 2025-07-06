import axios from "axios";

export const axiosPublic=axios.create({
    baseURL:'https://brand-shop-server-ivory-alpha.vercel.app/'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;