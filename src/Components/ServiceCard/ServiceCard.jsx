import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const {
    _id,
    service_name,
    service_image,
    service_area,
    service_description,
  } = service;
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      className="card bg-base-100 border border-gray-200"
    >
      <figure>
        <img src={service_image} className="w-full h-[200px] object-cover" alt="service image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-accent -mt-3">{service_name}</h2>

        <p className="flex items-center gap-1 font-semibold -my-1">
          <FaLocationDot />
          {service_area}
        </p>
        <p>
          {service_description.length > 80
            ? service_description.slice(0, 80) + "....."
            : service_description}
        </p>
        <div className="">
          <Link to={`/all-services/${_id}`}>
            <button className="btn btn-accent">View Details</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
