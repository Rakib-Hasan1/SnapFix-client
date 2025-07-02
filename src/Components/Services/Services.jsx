import React, { use } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Link } from "react-router";

const Services = ({ servicesPromise }) => {
  const services = use(servicesPromise);
  return (
    <div className="bg-base-200">
      <div className="w-11/12 mx-auto py-10">
        <h2 className="font-extrabold text-3xl text-accent text-center my-8">
          Top Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="my-5">
          <Link to="/all-services">
            <button className="btn btn-outline btn-accent">
              See All Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
