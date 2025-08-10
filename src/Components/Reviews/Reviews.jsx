import React, { use } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);

    return (
        <section className="bg-base-300 share-tech">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-accent oswald">
                    What Our Customers Say
                </h2>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviews?.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="bg-base-100 rounded-md p-6 my-10 hover:shadow-xl transition-shadow duration-300 h-[250px] flex flex-col justify-center">
                                {/* Rating Stars */}
                                <div className="flex items-center mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-500" />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="italic mb-4">“{review.review}”</p>

                                {/* User Info */}
                                <div className="flex items-center gap-3 mt-auto">
                                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                                        {review.userName?.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold">{review.userName}</p>
                                        <p className="text-sm">{review.userEmail}</p>
                                    </div>
                                </div>

                                {/* Date */}
                                <p className="text-xs text-gray-400 mt-3">
                                    {review.date
                                        ? new Date(review.date).toLocaleDateString()
                                        : "No date provided"}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;
