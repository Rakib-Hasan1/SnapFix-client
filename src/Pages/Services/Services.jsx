import React from "react";
import { Link, useLoaderData } from "react-router";

const Services = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div className="w-10/12 mx-auto my-6">
      <h2 className="font-extrabold text-2xl text-accent text-center my-5">
        All Services
      </h2>
      {services.map((service) => (
        <div key={service._id} className="card bg-base-100 shadow-sm my-8">
          <figure>
            <img src={service.service_image} alt="service image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-accent">{service.service_name}</h2>

            <p className="font-semibold">${service.service_price}</p>

            <p>{service.service_area}</p>
            <p>
              {service.service_description.length > 100
                ? service.service_description.slice(0, 100) + "....."
                : service.service_description}
            </p>

            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={service.providerPhotoURL}
                  className="w-12 h-12 object-cover rounded-full"
                  alt="Service provider image"
                />
                <div>
                  <p className="font-bold">
                    Provider:
                    <span className="font-normal">{service.providerName}</span>
                  </p>
                  <p className="font-bold">
                    Email:
                    <span className="font-normal">{service.providerEmail}</span>
                  </p>
                </div>
              </div>
              <div>
                <Link to={`/all-services/${service._id}`}>
                  <button className="btn btn-outline btn-accent">
                    Show Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
