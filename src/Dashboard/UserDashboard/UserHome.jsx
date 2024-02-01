import UseCartItemsInfo from "../../Hooks/UsecartItemsInfo/UseCartItemsInfo";

const UserHome = () => {
  const [booksInfo]=UseCartItemsInfo()
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
          <div className="stat-value text-primary">5</div>
        </div>

      </div>
    </div>
  );
};

export default UserHome;