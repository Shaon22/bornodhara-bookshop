import { useQuery } from "@tanstack/react-query";

const UseUserInfo = () => {
    const { data: userInfo,refetch } = useQuery({
        queryKey: ['info'],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/users`)
          return res.json()
        }
    
      })
      return [userInfo,refetch]
};

export default UseUserInfo;