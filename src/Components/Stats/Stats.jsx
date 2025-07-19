import React from "react";
import { TbRelationManyToManyFilled } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlinePriceChange } from "react-icons/md";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="bg-base-300">
      <div className="w-10/12 mx-auto">
        <h2 className="font-extrabold text-4xl text-accent text-center pt-14">
          Why Choose Us ?
        </h2>

        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-base-100 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center">
              <TbRelationManyToManyFilled className="text-accent" size={80} />
            </div>
            <p className="text-center font-bold text-xl py-2">
              Trusted & Verified Professionals
            </p>
            <p className="text-center">
              We handpick experienced and background-verified service providers
              to ensure safety, and top-notch service quality.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-base-100 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center">
              <FaShippingFast className="text-accent" size={80} />
            </div>
            <p className="text-center font-bold text-xl py-2">
              Fast & Convenient Booking
            </p>
            <p className="text-center">
              Schedule services in just a few clicks. Our platform is built for
              speed and simplicity, saving your time and eliminating the hassle.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-base-100 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center">
              <BiSolidPhoneCall className="text-accent" size={80} />
            </div>
            <p className="text-center font-bold text-xl py-2">
              24/7 Customer Support
            </p>
            <p className="text-center">
              Got a question or issue? Our friendly support team is available
              around the clock to assist you — day or night.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-base-100 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center">
              <MdOutlinePriceChange className="text-accent" size={80} />
            </div>
            <p className="text-center font-bold text-xl py-2">
              Transparent Pricing
            </p>
            <p className="text-center">
              No hidden charges. We offer clear and competitive pricing upfront
              so you know exactly what you're paying for.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
