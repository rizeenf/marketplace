import React from "react";
import Payment from "../../assets/payment.jpg";

const Footer = () => {
  return (
    <div className="footer h-60 text-sm text-gray-500 px-56 my-8">
      <div className="top flex justify-center items-center gap-10">
        <div className="card flex flex-1 justify-center  flex-col text-justify gap-1 ">
          <h2 className=" text-lg font-semibold">Categories</h2>
          <span>Men</span>
          <span>Women</span>
          <span>Kid</span>
          <span>Batik</span>
          <span>Hijab</span>
        </div>
        <div className="card flex flex-1 justify-center  flex-col text-justify gap-1">
          <h2 className=" text-lg font-semibold">Links</h2>
          <span>FAQs</span>
          <span>Pages</span>
          <span>Contact</span>
          <span>Career</span>
          <span>Stores</span>
        </div>
        <div className="card flex flex-1 justify-center  flex-col text-justify gap-1">
          <h2 className=" text-lg font-semibold">About</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            dolorem sit delectus harum praesentium pariatur voluptatum obcaecati
            tempore, ad quibusdam? Lorem ipsum dolor sit amet consectetur,
          </span>
        </div>
        <div className="card flex flex-1 justify-center  flex-col text-justify gap-1">
          <h2 className=" text-lg font-semibold">Contact</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
            illo ipsam qui hic praesentium aperiam deleniti excepturi assumenda.
            Eveniet, aliquam. Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
      </div>
      <div className="bottom flex flex-1 justify-between items-center">
        <div className="copyright flex items-center justify-center gap-5">
          <span className="text-xl font-semibold text-gray-800">
            SHOP APPRIZCATION
          </span>
          <span>© Copyright 2023. All rights reserved.</span>
        </div>
        <div className="icon ">
          <img src={Payment} alt="Payment" className=" h-20 mt-3 pr-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
