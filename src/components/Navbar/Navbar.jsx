import React, { useState } from "react";
import Flag from "/id.svg";
import { Link } from "react-router-dom";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="h-16 flex justify-center items-center relative">
      <div className="wrap w-screen h-full flex justify-between items-center ">
        <div className="left flex justify-center items-center mx-8 gap-3 ">
          <div className="item flex justify-center items-center text-lg text-gray-600">
            <img src={Flag} alt="ID Flag" className=" h-6 w-8" />
            <ExpandMoreOutlinedIcon />
          </div>
          <div className="item flex justify-center items-center text-lg text-gray-600">
            <span>IDR</span>
            <ExpandMoreOutlinedIcon />
          </div>
          <div className="item flex justify-center items-center text-lg gap-3 mx-5 text-gray-600">
            <Link to={"products/2"}>
              <span>Men</span>
            </Link>
            <Link to={"products/1"}>
              <span>Women</span>
            </Link>
            <Link to={"products/3"}>
              <span>Kids</span>
            </Link>
            <Link to={"products/4"}>
              <span>Batik</span>
            </Link>
          </div>
        </div>
        <div className="center text-xl font-semibold">
          <Link to={"/"}>
            <h1>SHOP APPRIZCATION</h1>
          </Link>
        </div>
        <div className="right flex justify-center items-center mx-5 w-max h-max py-4 ">
          <div className="item flex justify-center items-center text-lg gap-4 mx-5 text-gray-600">
            <span>Homepage</span>
            <span>Stores</span>
            <span>Promo</span>
          </div>
          <div className="icon flex justify-center items-center text-sm text-gray-600 gap-3 relative h-max w-max overflow-visible">
            <div className="item">
              <SearchOutlinedIcon />
            </div>
            <div
              className="item relative h-max w-max overflow-visible cursor-pointer"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCartOutlinedIcon />
              <div className="bubble h-5 w-5 rounded-full bg-red-400 absolute -top-2 -right-2  flex items-center justify-center text-white z-10">
                {products.length}
              </div>
            </div>
            <div className="item">
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className="item">
              <PermIdentityOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      {isCartOpen ? <Cart /> : ""}
    </div>
  );
};

export default Navbar;
