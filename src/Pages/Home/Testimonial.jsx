import{ useState, useEffect } from 'react';

const Testimonial = () => {
  // Array of testimonial data
  const testimonials = [
    {
      name: "Aisha Rahman",
      image: "https://placehold.co/100x100/ADD8E6/000000?text=AR",
      opinion: "Bornodhara has an incredible collection of books! I always find what I'm looking for, and the atmosphere is so welcoming. Highly recommend for any book lover."
    },
    {
      name: "Omar Khan",
      image: "https://placehold.co/100x100/90EE90/000000?text=OK",
      opinion: "As a student, finding affordable and diverse books is crucial. Bornodhara consistently delivers. Their service is excellent, and the prices are fair."
    },
    {
      name: "Fatima Begum",
      image: "https://placehold.co/100x100/FFB6C1/000000?text=FB",
      opinion: "I love spending my weekends at Bornodhara. It's more than just a bookshop; it's a community hub. The staff are knowledgeable and always happy to help."
    },
    {
      name: "Rahim Uddin",
      image: "https://placehold.co/100x100/FFD700/000000?text=RU",
      opinion: "The best bookshop in town! Bornodhara has a fantastic selection, and the online ordering is super convenient. My go-to place for all my reading needs."
    }
  ];

  // State to keep track of the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect for auto-playing the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Function to go to the previous testimonial
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next testimonial
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    // Main section for the testimonial component with padding and background
    <section className="py-16 bg-gray-50 dark:bg-gray-800 font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section title */}
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12 rounded-lg p-3">
          Happy Cutomers
        </h2>

        {/* Testimonial carousel container */}
        {/* Added overflow-hidden to clip testimonials outside the view */}
        <div className="relative bg-white dark:bg-gray-900 shadow-xl rounded-xl p-8 md:p-12 flex flex-col items-center overflow-hidden">

          {/* Inner container for all testimonials */}
          {/* Apply transform: translateX for the sliding effect */}
          <div
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              // Each testimonial item takes full width of its parent (which is 100% of the visible area)
              <div key={index} className="flex-shrink-0 w-full text-center">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.opinion}"
                </p>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-cyan-400 shadow-md object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/CCCCCC/000000?text=User"; }}
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Happy Customer</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons (Previous/Next) */}
          <div className="flex justify-between w-full absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4 md:px-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75 transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75 transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator for Testimonials */}
          <div className="flex space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-cyan-500' : 'bg-gray-300 dark:bg-gray-700'
                } transition-colors duration-300`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
