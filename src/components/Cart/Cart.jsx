import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const items = [
    {
      id: 1,
      title: "Peaky blinder's Coat",
      img1: "https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=1600",
      oldPrice: 52,
      desc: "Style: Jeans skirts can come in different styles, such as A-line, pencil, flared, wrap, or mini, depending on the cut and shape. Each style offers a unique look and can be suited for various occasions.",
      newPrice: 45,
      newItem: true,
    },
    {
      id: 2,
      title: "Red Woman's Coat",
      img1: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1906877/pexels-photo-1906877.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      oldPrice: 42,
      desc: "Jeans skirts may have details commonly found in jeans, such as rivets, pockets (front and back), belt loops, and a front fly with buttons or a zipper.",
      newPrice: 35,
      newItem: false,
    },
  ];
  return (
    <div className="cart w-96 h-96 bg-white shadow-md rounded-md absolute top-16 right-3 z-30 flex flex-col gap-5 ">
      <div className="title text-gray-500 font-semibold text-center">
        Products in your cart
      </div>
      {items.map((item, idx) => (
        <div
          className="item flex justify-center items-center gap-2 mx-5"
          key={idx}
        >
          <div className="img flex 1">
            <img src={item.img1} className="h-24 w-18 rounded" />
          </div>
          <div className="details flex flex-col flex-wrap gap-1 flex-[2]">
            <span className="text-sm text-gray-700">{item?.title}</span>
            <span className=" text-xs text-gray-400">
              {item?.desc.substring(0, 100)}
            </span>
            <span className="text-blue-800 font-semibold">
              IDR {item?.newPrice}.000
            </span>
          </div>
          <div className="cancel flex 1 cursor-pointer hover:opacity-70">
            <DeleteOutlinedIcon />
          </div>
        </div>
      ))}
      <div className="total flex items-center justify-between mx-5">
        <span>Subtotal</span>
        <span className="text-blue-600 text-lg font-semibold">IDR 80.000</span>
      </div>
      <div className="proceed self-center">
        <button className=" bg-red-400 text-white h-8 w-48 rounded hover:opacity-70">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Cart;
