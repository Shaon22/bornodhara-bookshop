import { Phone, Truck, Package, RotateCcw, CreditCard } from "lucide-react"


const services = [
  {
    id: "home-delivery",
    title: "Home Delivery",
    description: "Across The Country",
    icon: Package,
  },
  {
    id: "cash-on-delivery",
    title: "Cash on Delivery",
    description: "After Receive",
    icon: CreditCard,
  },
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    description: "Any Where",
    icon: Truck,
    showBadge: true,
  },
  {
    id: "happy-return",
    title: "Happy Return",
    description: "Quality Ensured",
    icon: RotateCcw,
  },
  {
    id: "call-center",
    title: "Call Center",
    description: "We Are Here",
    icon: Phone,
  },
]


const Delivery = () => {
            return (
                        <div className="w-full bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon

            return (
              <div key={service.id} className="bg-white rounded-lg p-6 text-center shadow-sm border">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-lg flex items-center justify-center relative">
                  <IconComponent className="w-8 h-8 text-white" />
                  {service.showBadge && (
                    <div className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 py-0.5 rounded text-[10px] font-bold">
                      FAST
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
            );
};

export default Delivery;
