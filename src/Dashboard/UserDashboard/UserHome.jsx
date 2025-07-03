import UseOrderInfo from "../../Hooks/Use OrderInfo/UseOrderInfo";
import UseCartItemsInfo from "../../Hooks/UsecartItemsInfo/UseCartItemsInfo";

const UserHome = () => {
  const [booksInfo]=UseCartItemsInfo()
  const [orderBook]=UseOrderInfo()
  return (
    <div className="flex items-center justify-center p-10">
      <div className="stats shadow w-[70%] mx-32">

        <div className="stat">
          <div className="stat-figure text-primary">
          </div>
          <div className="stat-title">Total Cart Items</div>
          <div className="stat-value text-primary">{booksInfo?.length}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Order Pending</div>
          <div className="stat-value text-primary">{orderBook?.length}</div>
        </div>

      </div>
    </div>
  );
};

export default UserHome;