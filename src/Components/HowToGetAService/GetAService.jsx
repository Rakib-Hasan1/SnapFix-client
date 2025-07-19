import Lottie from "lottie-react";
import React from "react";
import service_lottie from "../../assets/Lotties/Get-a-Service.json.json";

const GetAService = () => {
  return (
    <div className="w-11/12 mx-auto pt-8">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div>
            <p className="text-sm">------How it works</p>
            <h2 className="font-extrabold text-3xl">Easiest way to get a service</h2>
          <Lottie
            style={{ width: "400px" }}
            animationData={service_lottie}
            loop={true}
          ></Lottie>
        </div>
        <div>
          <ul className="steps steps-vertical w-full">
            <li className="step step-primary font-bold text-xl">
              Select the Service
            </li>
            <li className="step step-primary font-bold text-xl">
              Pick your schedule
            </li>
            <li className="step step-primary font-bold text-xl">
              Place Your Purchase & Relax
            </li>
            <li className="step font-bold text-xl">
              Wait for the Service Schedule
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetAService;
