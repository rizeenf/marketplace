import React, { useState } from "react";

const Product = () => {
  const [currentMainImg, setCurrentMainImg] = useState(0);

  const images = [
    "https://images.pexels.com/photos/1329808/pexels-photo-1329808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1425249/pexels-photo-1425249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1425248/pexels-photo-1425248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="product flex mx-16">
      <div className="left flex-1 flex gap-2 h-full justify-center">
        <div className="sideimg flex flex-col justify-between max-h-screen gap-1">
          <img
            src={images[0]}
            alt="Images"
            className=" w-32 h-48 object-cover cursor-pointer hover:opacity-70 "
            onClick={() => setCurrentMainImg(0)}
          />
          <img
            src={images[1]}
            alt="Images"
            className=" w-32 h-48 object-cover cursor-pointer hover:opacity-70 "
            onClick={() => setCurrentMainImg(1)}
          />
          <img
            src={images[2]}
            alt="Images"
            className=" w-32 h-48 object-cover cursor-pointer hover:opacity-70 "
            onClick={() => setCurrentMainImg(2)}
          />
        </div>
        <img
          src={images[`${currentMainImg}`]}
          alt=""
          className="mainImg w-[420px] h-[600px] object-cover"
        />
      </div>
      <div className="right flex-1"></div>
    </div>
  );
};

export default Product;
