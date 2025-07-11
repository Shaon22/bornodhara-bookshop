
// import { Search } from "lucide-react"
// import { useEffect, useState } from "react"

// const Navbar2 = () => {
//             const [isVisible, setIsVisible] = useState(true)
//   const [lastScrollY, setLastScrollY] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY

//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         // Scrolling down and past 100px
//         setIsVisible(false)
//       } else if (currentScrollY < lastScrollY) {
//         // Scrolling up
//         setIsVisible(true)
//       }

//       setLastScrollY(currentScrollY)
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [lastScrollY])
//             return (
            
//     <div
//         className={`fixed top-20 left-0 right-0  p-4 transition-transform duration-300 ease-in-out ${
//           isVisible ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="flex items-center justify-center">
//           <div className="relative w-full max-w-md">
//             <div className="bg-cyan-400 rounded-full p-1 shadow-lg">
//               <div className="flex items-center bg-white rounded-full">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="flex-1 border-0 bg-transparent px-4 py-3 text-gray-600 placeholder:text-gray-400 focus:outline-none rounded-full"
//                 />
//                 <button className="bg-cyan-400 hover:bg-yellow-500 text-white rounded-full h-10 w-10 mr-1 flex items-center justify-center transition-colors">
//                   <Search className="h-5 w-5" />
//                   <span className="sr-only">Search</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   )
// }

  

// export default Navbar2;
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar2 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [placeholder, setPlaceholder] = useState("");

  const texts = ["Search books...", "Find authors...", "Discover stories...", "Explore categories..."];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Custom typewriter effect for the placeholder
  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const fullText = texts[textIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      setPlaceholder(fullText.substring(0, charIndex) || " ");

      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => (isDeleting = true), 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }

      setTimeout(type, isDeleting ? 50 : 100);
    };

    const timeoutId = setTimeout(type, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`fixed top-20 left-0 right-0 p-4 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-md">
          <div className="bg-cyan-400 rounded-full p-1 shadow-lg">
            <div className="flex items-center bg-white rounded-full">
              <input
                type="text"
                placeholder={placeholder}
                className="flex-1 font-semibold border-0 bg-transparent px-4 py-3 text-gray-600 placeholder:text-gray-400 placeholder:text-base placeholder:pl-1 focus:outline-none rounded-full"
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
  );
};

export default Navbar2;
