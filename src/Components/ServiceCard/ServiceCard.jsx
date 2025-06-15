import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const {
    _id,
    service_name,
    service_image,
    service_area,
    service_description,
  } = service;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={service_image} alt="service image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-accent">{service_name}</h2>

        {/* <p className="font-semibold">${service_price}</p> */}

        <p className="flex items-center gap-1 font-semibold"><FaLocationDot />{service_area}</p>
        <p>
          {service_description.length > 100
            ? service_description.slice(0, 100) + "....."
            : service_description}
        </p>
        <div className="mt-4">
          <Link to={`/all-services/${_id}`}><button className="btn btn-accent">View Details</button></Link>
         
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
