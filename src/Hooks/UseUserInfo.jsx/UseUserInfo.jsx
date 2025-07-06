import { useQuery } from "@tanstack/react-query";

const UseUserInfo = () => {
    const { data: userInfo,refetch } = useQuery({
        queryKey: ['info'],
        queryFn: async () => {
          const res = await fetch(`https://bornodhara-bookshop-server.vercel.app/users`)
          return res.json()
        }
    
      })
      return [userInfo,refetch]
};

export default UseUserInfo;