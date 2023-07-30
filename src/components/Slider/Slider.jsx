import React, { useState } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const datas = [
    "https://images.pexels.com/photos/1126935/pexels-photo-1126935.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/2702800/pexels-photo-2702800.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];

  const handlePrevImg = () => {
    setCurrentImage(currentImage === 0 ? datas.length - 1 : (prev) => prev - 1);
  };
  const handleNextImg = () => {
    setCurrentImage(currentImage === datas.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className=" h-[calc(100vh-4rem)] w-screen">
      <div
        className="flex flex-row h-full w-[300vw] transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}vw)` }}
      >
        <img
          src={datas[0]}
          alt="Home"
          className=" w-screen h-full object-cover"
        />
        <img
          src={datas[1]}
          alt="Home"
          className=" w-screen h-full object-cover"
        />
        <img
          src={datas[2]}
          alt="Home"
          className=" w-screen h-full object-cover"
        />
      </div>
      <div className="icons w-fit h-fit flex gap-3 absolute left-0 right-0 bottom-20 m-auto text-gray-700 ">
        <div
          onClick={handlePrevImg}
          className="icon border border-gray-700 cursor-pointer"
        >
          <KeyboardArrowLeftOutlinedIcon fontSize="large" />
        </div>
        <div
          onClick={handleNextImg}
          className="icon border border-gray-700 cursor-pointer"
        >
          <KeyboardArrowRightOutlinedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
