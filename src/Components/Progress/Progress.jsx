import React from "react";

const Progress = () => {
  return (
    <div className="bg-base-300">
      <h2 className="font-extrabold text-3xl text-accent text-center py-5 oswald">
        Our Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center py-8 share-tech">
        <div>
          <p className="font-bold text-2xl">15,000 +</p>
          <p className="font-semibold">Service Providers</p>
        </div>
        <div>
          <p className="font-bold text-2xl">2,00,000 +</p>
          <p className="font-semibold">Total Order Served</p>
        </div>
        <div>
          <p className="font-bold text-2xl">1,00,000 +</p>
          <p className="font-semibold">5 Star Received</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
