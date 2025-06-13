import React from "react";
import { useLoaderData } from "react-router";

const ServiceDetails = () => {
  const {
    providerEmail,
    providerName,
    providerPhotoURL,
    service_area,
    service_description,
    service_image,
    service_name,
    service_price,
    _id,
  } = useLoaderData();
//   console.log(ServiceDetails);
  return (
    <div className="w-8/12 mx-auto my-6">
      <h2 className="font-extrabold text-2xl text-accent text-center my-5">
        Service Details
      </h2>

        <div key={_id} className="card bg-base-100 shadow-sm my-8">
          <figure>
            <img src={service_image}  alt="service image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-accent">{service_name}</h2>

            <p className="font-semibold">${service_price}</p>

            <p>{service_area}</p>
            <p>
              
              {service_description}
              
            </p>

            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={providerPhotoURL}
                  className="w-12 h-12 object-cover rounded-full"
                  alt="Service provider image"
                />
                <div>
                  <p className="font-bold">
                    Provider:{" "}
                    <span className="font-normal">{providerName}</span>
                  </p>
                  <p className="font-bold">
                    Email:{" "}
                    <span className="font-normal">{providerEmail}</span>
                  </p>
                </div>
              </div>
              <div>
                
                  <button className="btn btn-accent">
                    Book Now
                  </button>
               
              </div>
            </div>
          </div>
        </div>

    </div>

  );
};

export default ServiceDetails;
