import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import hero_image1 from "../../assets/Images/cheerful-asian-male-janitor-walking-into-hotel-room-carrying-supplies-bucket.jpg";
import hero_image2 from '../../assets/Images/electrician-builder-work-installation-lamps-height-professional-overalls-with-drill-repair-site.jpg';
import hero_image3 from '../../assets/Images/electrician-working-near-board-with-wires-installation-connection-electrics.jpg';
import hero_image4 from '../../assets/Images/man-doing-professional-home-cleaning-service.jpg';
import hero_image5 from "../../assets/Images/man-installs-heating-system-house-checks-pipes-with-wrench.jpg"

const Hero = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {[hero_image1, hero_image2, hero_image3, hero_image4, hero_image5].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img src={image} className="w-full h-full object-cover brightness-50" alt="" />
              <div className="absolute space-y-4 top-1/2 right-10 md:right-20 transform -translate-y-1/2 text-white text-3xl font-bold text-start max-w-xl">
                <p>
                  <Typewriter
                    words={["SnapFix - Your One-Stop Service Solution"]}
                    loop={1}
                    typeSpeed={50}
                    deleteSpeed={0}
                    delaySpeed={3000}
                  />
                </p>
                <p>
                  <Typewriter
                    words={["Connect, Hire, and Get Things Done Fast!"]}
                    loop={1}
                    cursor={false}
                    typeSpeed={50}
                    deleteSpeed={0}
                    delaySpeed={3000}
                  />
                </p>
                <button className="btn btn-success">
                  Explore more <FaLongArrowAltRight className="mt-1" size={20}/>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
