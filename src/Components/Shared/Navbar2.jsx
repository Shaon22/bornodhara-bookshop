
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar2 = () => {
            const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])
            return (
            
    <div
        className={`fixed top-20 left-0 right-0  p-4 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="bg-cyan-400 rounded-full p-1 shadow-lg">
              <div className="flex items-center bg-white rounded-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 border-0 bg-transparent px-4 py-3 text-gray-600 placeholder:text-gray-400 focus:outline-none rounded-full"
                />
                <button className="bg-cyan-400 hover:bg-yellow-500 text-white rounded-full h-10 w-10 mr-1 flex items-center justify-center transition-colors">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

  

export default Navbar2;