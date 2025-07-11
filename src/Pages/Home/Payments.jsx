const Payments = () => {
  const paymentMethods = [
    {
      name: "Visa",
      logo: "https://cdn.jsdelivr.net/gh/shaon22/bornodhara-bookshop/src/assets/visa-4.svg",
    },
    { name: "Mastercard", logo: "https://cdn.jsdelivr.net/gh/shaon22/bornodhara-bookshop/src/assets/bkash.svg" },
    { name: "bKash", logo: "/placeholder.svg?height=32&width=50" },
    { name: "Nagad", logo: "/placeholder.svg?height=32&width=50" },
    { name: "Rocket", logo: "/placeholder.svg?height=32&width=50" },
    { name: "Upay", logo: "/placeholder.svg?height=32&width=50" },
  ];
  return (
    <div className="w-full bg-white">
      <div className="flex items-center gap-4 p-4">
        <span className="text-gray-700 font-medium whitespace-nowrap">
          Make payments via
        </span>
        <div className="flex flex-wrap items-center gap-3">
          {paymentMethods.map((method, index) => (
            <img className="object-contai h-10 w-16  rounded-md  shadow-sm hover:shadow-md transition-shadow  " key={index} src={method.logo} alt={method.name} />
            // <div
            //   key={index}
            //   className="flex items-center justify-center bg-white border border-gray-200 rounded-md p-2 shadow-sm hover:shadow-md transition-shadow"
            //   style={{ minWidth: "80px", height: "50px" }}
            // >
            //   <img
            //     src={method.logo || "/placeholder.svg"}
            //     alt={method.name}
            //     className="object-contain borde border-blac h-10 w-16  "
                
            //   />
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payments;
