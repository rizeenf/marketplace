import React from "react";
import Flag from "/id.svg";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="h-16 flex justify-center items-center">
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
            <span>Men</span>
            <span>Women</span>
            <span>Kids</span>
            <span>Batik</span>
          </div>
        </div>
        <div className="center text-xl font-semibold">
          <h1>SHOP APPRIZCATION</h1>
        </div>
        <div className="right flex justify-center items-center mx-5 w-max h-max py-4 ">
          <div className="item flex justify-center items-center text-lg gap-3 mx-5 text-gray-600">
            <span>Homepage</span>
            <span>Stores</span>
            <span>Promo</span>
          </div>
          <div className="icon flex justify-center items-center text-sm text-gray-600 gap-3 relative h-max w-max overflow-visible">
            <div className="item">
              <SearchOutlinedIcon />
            </div>
            <div className="item relative h-max w-max overflow-visible ">
              <ShoppingCartOutlinedIcon />
              <div className="bubble h-5 w-5 rounded-full bg-red-400 absolute -top-2 -right-2  flex items-center justify-center text-white z-10">
                7
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
    </div>
  );
};

export default Navbar;
