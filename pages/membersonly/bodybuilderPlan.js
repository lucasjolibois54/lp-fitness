import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PlanOverview from "../../components/plans/BodybuilderPlan/planOverview";
import HeaderAfterLogin from "../../components/main/headerAfterLogin";
import Hero from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/hero";
import BodybuilderDays from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/bodybuilderDays";
import Footer from "../../components/main/footer";

function members() {
  return (
    <div>
      <HeaderAfterLogin />
      <Hero />
      <BodybuilderDays
        name="Day 1"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661370819/Web%20Dev%20Projects/Rectangle_12_2_1_gdmvdj.webp"
        linking="/"
      />
      <Footer />
    </div>
  );
}

export default members;

export const getServerSideProps = withPageAuthRequired();
