import React, { Suspense } from "react";
import Hero from "../../Components/Hero/Hero";
import Stats from "../../Components/Stats/Stats";
import Services from "../../Components/Services/Services";
import LoadingEffect from "../../Components/LoadingEffect/LoadingEffect";

const Home = () => {
  const servicesPromise = fetch("http://localhost:3000/services").then((res) =>
    res.json()
  );

  return (
    <div>
      <Hero></Hero>
      <Stats></Stats>
      <Suspense fallback={<LoadingEffect></LoadingEffect>}>
        <Services servicesPromise={servicesPromise}></Services>
      </Suspense>
    </div>
  );
};

export default Home;
