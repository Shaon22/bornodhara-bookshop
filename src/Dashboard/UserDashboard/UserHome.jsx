
const UserHome = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="stats shadow w-[70%] mx-32">

        <div className="stat">
          <div className="stat-figure text-primary">
          </div>
          <div className="stat-title">Total Cart Items</div>
          <div className="stat-value text-primary">25.6K</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Bought Books</div>
          <div className="stat-value text-secondary">2.6M</div>
        </div>
        <div className="stat">
          <div className="stat-title">Order Pending</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>

      </div>
    </div>
  );
};

export default UserHome;