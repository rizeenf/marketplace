import React from "react";
import Categories from "../../components/Categories/Categories";
import Sections from "../../components/Sections/Sections";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div className="home ">
      <Slider />
      <Sections type={"featured"} />
      <Categories />
      <Sections type={"trending"} />
    </div>
  );
};

export default Home;
