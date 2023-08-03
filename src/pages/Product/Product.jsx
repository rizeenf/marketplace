import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";

const Product = () => {
  const [currentMainImg, setCurrentMainImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

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
          className="mainImg w-[420px] h-[600px] object-cover"
        />
      </div>
      <div className="right flex-1 flex flex-col gap-5 mt-3 text-gray-700">
        <div className="div flex justify-around items-center flex-row p-2">
          <div className="title text-lg font-semibold">Woman Skirt Jeans</div>
          <div className="price text-2xl font-semibold text-red-800">
            IDR 58.000
          </div>
        </div>
        <div className="desc text-sm text-gray-400 text-justify">
          Fabric: Denim is a sturdy cotton twill fabric that is known for its
          durability and rugged appearance. It often has a distinctive diagonal
          pattern and is commonly associated with casual wear. Styling: The
          styling options for a jeans skirt are numerous. It can create a
          casual, chic, or even a slightly edgy look, depending on how it's
          paired with other clothing items and accessories
        </div>
        <div className="qty mt-16 flex gap-5 font-semibold text-lg items-center">
          <button
            className="min bg-red-100 w-12 h-10"
            onClick={() => setQuantity(quantity === 1 ? 1 : (prev) => prev - 1)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="plus bg-red-100 w-12 h-10"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="addCart bg-red-400 w-36 text-lg text-white rounded-sm h-10 flex justify-center items-center ">
          Add to cart
        </button>
        <div className="option flex flex-row gap-8 text-sm text-gray-500">
          <div className="wishlist flex gap-2 justify-center items-center">
            <FavoriteBorderOutlinedIcon />
            <span>Add to wishlist</span>
          </div>
          <div className="compare flex gap-2 justify-center items-center">
            <BalanceOutlinedIcon />
            <span>Add to compare</span>
          </div>
        </div>
        <div className="vendors text-xs flex flex-col gap-2 text-gray-400">
          <span>Vendor : UNIQLO</span>
          <span>Product : Skirt</span>
          <span>Tag : Skirt, Woman, Jeans</span>
          <span>About</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
