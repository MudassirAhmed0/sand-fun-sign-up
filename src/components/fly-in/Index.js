import React from "react";
import Hero from "./hero/Hero";
import About from "./About";
import Benefits from "./benefits/Benefits";
import SignupForm from "./SignupForm";

const FlyInPage = ({ arabic }) => {
  return (
    <>
      <Hero arabic={arabic} />
      <About arabic={arabic} />
      <Benefits arabic={arabic} />
      <SignupForm arabic={arabic} />
    </>
  );
};

export default FlyInPage;
