import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

const Services = () => {
  const services = useLoaderData();
  const [searchText, setSearchText] = useState("");

  // Filter services by search text
  const filteredServices = services.filter((service) =>
    service.service_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="bg-base-300">
      <div className="w-11/12 mx-auto py-6">
        <Helmet>
          <title>All Services | SnapFix</title>
        </Helmet>

        <h2 className="font-extrabold text-3xl text-accent text-center my-5 oswald">
          All Services
        </h2>

        {/* 🔍 Search input */}
        <div className="flex justify-center mb-6 share-tech">
          <input
            type="text"
            placeholder="Search by service name..."
            className="input input-bordered input-accent w-full max-w-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* List services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <Link to={`/all-services/${service._id}`}>
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="card bg-base-100"
                >
                  <figure>
                    <img src={service.service_image} className="w-full h-[200px] object-cover" alt="service image" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-accent -mt-3">{service.service_name}</h2>

                    <p className="flex items-center gap-1 font-semibold -my-1">
                      <FaLocationDot />
                      {service.service_area}
                    </p>
                    <p className="hover:underline">
                      {service.service_description.length > 80
                        ? service.service_description.slice(0, 80) + "....."
                        : service.service_description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))
          ) : (
            <p className="text-center text-xl mt-10 share-tech">No services found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
