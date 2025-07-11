import { Phone, Truck, Banknote, RotateCcw } from "lucide-react"

export default function Component() {
  const services = [
    {
      icon: <Truck className="w-6 h-6 text-red-500" />,
      title: "Home Delivery",
      subtitle: "Across The Country",
    },
    {
      icon: <Banknote className="w-6 h-6 text-red-500" />,
      title: "Cash on Delivery",
      subtitle: "After Receive",
    },
    {
      icon: <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">FAST</div>,
      title: "Fast Delivery",
      subtitle: "Any Where",
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-red-500" />,
      title: "Happy Return",
      subtitle: "Quality Ensured",
    },
    {
      icon: <Phone className="w-6 h-6 text-red-500" />,
      title: "Call Center",
      subtitle: "We Are Here",
    },
  ]

  return (
    <div className="max-w-sm mx-auto bg-gray-500">
      <div className="bg-white">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-4 p-4 border-b border-gray-100 last:border-b-0">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">{service.icon}</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-base">{service.title}</h3>
              <p className="text-sm text-gray-600 mt-0.5">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
