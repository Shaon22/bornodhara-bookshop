import About from "./About";
import Categories from "./Categories";
import Payments from "./Payments";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="">
           {/* <Banner></Banner> */}
           <About></About>
           <Categories></Categories>
           <Testimonial></Testimonial>
           <Payments></Payments>
        </div>
    );
};

export default Home;