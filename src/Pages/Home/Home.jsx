import About from "./About";
import Categories from "./Categories";
import Delivery from "./Delivery";
import Payments from "./Payments";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="">
           {/* <Banner></Banner> */}
           <About></About>
           <Categories></Categories>
           <Delivery></Delivery>
           <Testimonial></Testimonial>
           <Payments></Payments>
        </div>
    );
};

export default Home;