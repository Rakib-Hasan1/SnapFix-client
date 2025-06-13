import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { VscStarEmpty } from "react-icons/vsc";

const ServiceCard = ({ service }) => {
  const { title, description, price, provider, image, rating, availability } =
    service;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="service image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-accent">{title}</h2>

        <p className="font-semibold">${price}</p>
        {availability === "Available" ? (
          <p className="flex items-center font-bold text-success">
            <MdOutlineDone size={20} />
            {availability}
          </p>
        ) : (
          <p className="flex items-center font-bold text-error">
            <RxCross2 size={20} />
            {availability}
          </p>
        )}

        <p className="font-bold">
          Provider: <span className="font-normal">{provider}</span>
        </p>
        <p>{description}</p>

        <div className="card-actions  justify-between">
          <div className="flex items-center gap-1 font-bold">
            <VscStarEmpty className="text-warning" size={20} /> {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
