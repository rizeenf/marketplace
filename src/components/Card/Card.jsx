import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`../product/${item.id}`} className="overflow-hidden">
      <div className="card w-64 h-full mt-8 ">
        <div className="wrapper flex justify-center items-center flex-col gap-1 ">
          <figure className=" w-full h-96 overflow-hidden relative cursor-pointer">
            <img
              src={
                import.meta.env.VITE_APP_URL +
                item?.attributes?.img1.data.attributes.url
              }
              alt={item?.title}
              className=" w-full h-full object-cover absolute z-20 hover:z-0"
            />
            <img
              src={
                import.meta.env.VITE_APP_URL +
                item?.attributes?.img2.data.attributes.url
              }
              alt={item?.attributes.title}
              className=" w-full h-full object-cover absolute z-10 hover:z-20"
            />
            {item?.attributes.newItem ? (
              <figcaption className="absolute top-1 right-1 bg-gray-400 text-white uppercase p-1 rounded-sm text-sm z-30">
                New item
              </figcaption>
            ) : (
              ""
            )}
          </figure>
          <div className="title self-start text-base cursor-pointer">
            <h2>{item?.attributes.title}</h2>
          </div>
          <div className="price flex flex-row gap-3 self-start justify-center items-center">
            <span className="oldprice text-sm line-through text-gray-500 ">
              IDR {item?.attributes.oldPrice}K
            </span>
            <span className="newprice text-lg font-semibold">
              IDR {item?.attributes.price}K
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
