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
        <div
          key={service._id}
          className="flex flex-col md:flex-row bg-base-100 shadow-lg rounded-xl overflow-hidden border border-gray-200 my-5"
        >
          <div className="md:w-3/6 w-full h-72 md:h-auto">
            <img
              src={service.service_image}
              alt={service.service_name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="md:w-3/5 w-full p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-accent mb-3">
                {service.service_name}
              </h2>

              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                {service.service_description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 mb-5">
                <p>
                  <span className="font-semibold">Price:</span> $
                  {service.service_price}
                </p>
                <p>
                  <span className="font-semibold">Area:</span>{" "}
                  {service.service_area}
                </p>
                <p>
                  <span className="font-semibold">Provider Name:</span>{" "}
                  {service.providerName}
                </p>
                <p>
                  <span className="font-semibold">Provider Email:</span>{" "}
                  {service.providerEmail}
                </p>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={service.providerPhotoURL}
                  alt="Provider"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{service.providerName}</p>
                  <p className="text-sm text-gray-500">
                    {service.providerEmail}
                  </p>
                </div>
              </div>
            </div>

            <div>
                <Link to={`/all-services/${service._id}`}>
                  <button className="btn btn-accent">
                    Show Details
                  </button>
                </Link>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
