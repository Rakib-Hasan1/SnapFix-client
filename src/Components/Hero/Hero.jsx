import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import banner from "../../assets/Images/banner-image.jpg"
import banner2 from "../../assets/Images/banner-image (2).jpg"
import banner3 from "../../assets/Images/banner-image (3).jpg"

const Hero = () => {
  const exploreService = () => {
    window.scrollTo({
      top: 1080,   // Only use `top`, not x and y
      behavior: "smooth"
    });
  };

  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
        {[banner, banner2, banner3].map(
          (image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[600px] flex">
                <img
                  src={image}
                  className="brightness-50 w-full h-full object-cover object-right lg:object-right"
                  alt="banner"
                />
                <div className="share-tech absolute space-y-4 top-1/2 left-10 md:left-20 transform -translate-y-1/2 text-white text-3xl font-bold text-start max-w-xl">
                  <p className="pl-3">
                    <Typewriter
                      className="share-tech"
                      words={["Your One-Stop Service Solution"]}
                      typeSpeed={50}
                      delaySpeed={3000}
                    />
                  </p>
                  <p className="pl-3">
                    <Typewriter
                      words={["Connect, Hire, and Get Things Done!"]}
                      typeSpeed={40}
                      delaySpeed={2800}
                    />
                  </p>
                  <button onClick={exploreService} className="btn btn-success btn-outline font-normal text-lg ml-3">
                    Explore more{" "}
                    <FaLongArrowAltRight size={25} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Hero;
