import React, { Suspense } from "react";
import Hero from "../../Components/Hero/Hero";
import Stats from "../../Components/Stats/Stats";
import Services from "../../Components/Services/Services";
import LoadingEffect from "../../Components/LoadingEffect/LoadingEffect";
import { Helmet } from "react-helmet-async";
import Progress from "../../Components/Progress/Progress";
import GetAService from "../../Components/HowToGetAService/GetAService";
import Reviews from "../../Components/Reviews/Reviews";

const Home = () => {
  const servicesPromise = fetch("https://snap-fix-server.vercel.app/services").then((res) =>
    res.json()
  );

  const reviewsPromise = fetch("https://snap-fix-server.vercel.app/reviews").then((res) =>
    res.json()
  );

  return (
    <div>
      <Helmet>
        <title>Home | SnapFix</title>
      </Helmet>
      <Hero></Hero>
      <Stats></Stats>
      <Suspense fallback={<LoadingEffect></LoadingEffect>}>
        <Services servicesPromise={servicesPromise}></Services>
      </Suspense>
      <Progress></Progress>
      <Suspense fallback={<LoadingEffect></LoadingEffect>}>
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
      </Suspense>
      <GetAService></GetAService>
    </div>
  );
};

export default Home;
