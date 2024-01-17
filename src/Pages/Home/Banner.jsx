
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
const Banner = () => {
    return (
        <div className='px-3 sm:px-0'>
            <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img className='' src={'https://i.ibb.co/X2ZzkBx/library.jpg'} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      
        <img src={'https://i.ibb.co/BcZHCGY/pexels-hu-nh-t-2098691-1.jpg'} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={'https://i.ibb.co/p2ZSMYB/slider3.jpg'} alt="" />
      </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Banner;