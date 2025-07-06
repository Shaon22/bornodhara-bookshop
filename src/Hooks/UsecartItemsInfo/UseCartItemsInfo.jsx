import { useContext } from "react";
import { MyContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseCartItemsInfo = () => {
  const { user } = useContext(MyContext);

  const { data: booksInfo = [], refetch, isLoading } = useQuery({
    enabled: !!user?.email, // ✅ Only run if user email exists
    queryKey: ["books", user?.email], // ✅ Key includes user email for cache isolation
    queryFn: async () => {
      const res = await fetch(`https://brand-shop-server-ivory-alpha.vercel.app/cart/${user.email}`);
      return res.json();
    },
  });

  return [booksInfo, refetch, isLoading];
};

export default UseCartItemsInfo;
