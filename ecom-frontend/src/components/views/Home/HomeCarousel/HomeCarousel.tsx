import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOutlineKeyboard,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
interface PropTypes {
  isCarouselLoading: boolean;
}

const HomeCarousel = (props: PropTypes) => {
  const { isCarouselLoading } = props;
  return (
    <div className="mb-4 h-[25vw] lg:mx-0 lg:mb-16 lg:h-[20vw]">
      {!isCarouselLoading ? (
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="group h-full w-full"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide key={1}>
            <Image
              src={"/images/general/banner1.jpeg"}
              alt="banner1"
              className="h-[90%] w-full object-cover lg:rounded-2xl"
              height={1080}
              width={1920}
            />
          </SwiperSlide>
          <SwiperSlide key={2}>
            <Image
              src={"/images/general/banner2.jpg"}
              alt="banner2"
              className="h-[90%] w-full object-cover lg:rounded-2xl"
              height={1080}
              width={1920}
            />
          </SwiperSlide>
          <SwiperSlide key={3}>
            <Image
              src={"/images/general/banner3.jpg"}
              alt="banner3"
              className="h-[90%] w-full object-cover lg:rounded-2xl"
              height={1080}
              width={1920}
            />
          </SwiperSlide>
          <div className="custom-next absolute right-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-800/25 p-2 text-white opacity-0 transition-opacity hover:bg-gray-800/50 group-hover:opacity-100">
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </div>
          <div className="custom-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-800/25 p-2 text-white opacity-0 transition-opacity hover:bg-gray-800/50 group-hover:opacity-100">
            <MdOutlineKeyboardArrowLeft className="text-3xl" />
          </div>
        </Swiper>
      ) : (
        <Skeleton className="h-[90%] w-full lg:rounded-2xl" />
      )}
    </div>
  );
};

export default HomeCarousel;
