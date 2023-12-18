
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
const Banner = () => {
    return (
        <div className='max-h-[500px]'>
            <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img className='' src={'https://i.ibb.co/MB8hzgC/slider1.jpg'} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={'https://i.ibb.co/kyMrcWV/slider2.jpg'} alt="" />
      </SwiperSlide>
      <SwiperSlide><img src={'https://i.ibb.co/p2ZSMYB/slider3.jpg'} alt="" /></SwiperSlide>
      <SwiperSlide><img src={'https://i.ibb.co/19HJ7Rb/rsz-1rsz-slider4.jpg'} alt="" /></SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Banner;