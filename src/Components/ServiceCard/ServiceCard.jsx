import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { VscStarEmpty } from "react-icons/vsc";

const ServiceCard = ({ service }) => {
  const {
    service_name,
    service_image,
    service_price,
    service_area,
    service_description,
    providerName,
    providerEmail,
    providerPhotoURL,
  } = service;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={service_image} alt="service image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-accent">{service_name}</h2>

        <p className="font-semibold">${service_price}</p>

        <p>{service_area}</p>
        <p>
          {service_description.length > 100
            ? service_description.slice(0, 100) + "....."
            : service_description}
        </p>

        <div className="flex items-center gap-3">
          <img
            src={providerPhotoURL}
            className="w-12 h-12 object-cover rounded-full"
            alt="Service provider image"
          />
          <div>
            <p className="font-bold">
            Provider: <span className="font-normal">{providerName}</span>
          </p>
          <p className="font-bold">
            Email: <span className="font-normal">{providerEmail}</span>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
