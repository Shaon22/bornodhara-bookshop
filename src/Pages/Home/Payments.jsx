
const Payments = () => {
           const paymentMethods = [
    { name: "Visa", logo: "/placeholder.svg?height=32&width=50" },
    { name: "Mastercard", logo: "/placeholder.svg?height=32&width=50" },
    { name: "American Express", logo: "/placeholder.svg?height=32&width=50" },
    { name: "Diners Club", logo: "/placeholder.svg?height=32&width=50" },
    { name: "Discover", logo: "/placeholder.svg?height=32&width=50" },
    { name: "JCB", logo: "/placeholder.svg?height=32&width=50" },
    { name: "UnionPay", logo: "/placeholder.svg?height=32&width=50" },
    { name: "Payme", logo: "/placeholder.svg?height=32&width=50" },
    { name: "AS Bank", logo: "/placeholder.svg?height=32&width=50" },
    { name: "bKash", logo: "/placeholder.svg?height=32&width=50" },
    { name: "Nagad", logo: "/placeholder.svg?height=32&width=50" },
    { name: "Rocket", logo: "/placeholder.svg?height=32&width=50" },
    { name: "Prothom Alo", logo: "/placeholder.svg?height=32&width=50" },
    { name: "Upay", logo: "/placeholder.svg?height=32&width=50" },
    { name: "Discover", logo: "/placeholder.svg?height=32&width=50" },
    { name: "PayPal", logo: "/placeholder.svg?height=32&width=50" },
  ]
            return (
                      <div className="w-full bg-white">
      <div className="flex items-center gap-4 p-4">
        <span className="text-gray-700 font-medium whitespace-nowrap">Make payments via</span>
        <div className="flex flex-wrap items-center gap-3">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white border border-gray-200 rounded-md p-2 shadow-sm hover:shadow-md transition-shadow"
              style={{ minWidth: "50px", height: "32px" }}
            >
              <img
                src={method.logo || "/placeholder.svg"}
                alt={method.name}
                className="object-contain max-w-full max-h-full"
                style={{ width: "40px", height: "24px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
            );
};

export default Payments;