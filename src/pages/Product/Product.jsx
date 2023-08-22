import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import useFetch from "../../hook/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const [currentMainImg, setCurrentMainImg] = useState("img1");
  const [quantity, setQuantity] = useState(1);
  const productId = parseInt(useParams().id);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`products/${productId}?populate=*`);

  return (
    <div className="product flex mx-16">
      {error ? (
        "Error .."
      ) : loading ? (
        "Loading .."
      ) : (
        <>
          <div className="left flex-1 flex gap-2 h-full justify-center">
            <div className="sideimg flex flex-col justify-start max-h-screen gap-1">
              <img
                src={
                  import.meta.env.VITE_APP_URL +
                  data?.attributes?.img1.data.attributes.url
                }
                alt="Images"
                className=" w-32 h-48 object-cover cursor-pointer hover:opacity-70 "
                onClick={() => setCurrentMainImg("img1")}
              />
              <img
                src={
                  import.meta.env.VITE_APP_URL +
                  data?.attributes?.img2.data.attributes.url
                }
                alt="Images"
                className=" w-32 h-48 object-cover cursor-pointer hover:opacity-70 "
                onClick={() => setCurrentMainImg("img2")}
              />
            </div>
            <img
              src={
                import.meta.env.VITE_APP_URL +
                data?.attributes?.[currentMainImg].data.attributes.url
              }
              className="mainImg w-[420px] h-[600px] object-cover"
            />
          </div>
        </>
      )}

      <div className="right flex-1 flex flex-col gap-5 mt-3 text-gray-700">
        <div className="div flex justify-around items-center flex-row p-2">
          <div className="title text-lg font-semibold">
            {data?.attributes?.title}
          </div>
          <div className="price text-2xl font-semibold text-red-800">
            IDR {data?.attributes?.price}.000
          </div>
        </div>
        <div className="desc text-sm text-gray-400 text-justify">
          {data?.attributes?.desc}
        </div>
        <div className="qty mt-16 flex gap-5 font-semibold text-lg items-center">
          <button
            className="min bg-red-100 w-12 h-10 hover:opacity-70"
            onClick={() => setQuantity(quantity === 1 ? 1 : (prev) => prev - 1)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="plus bg-red-100 w-12 h-10 hover:opacity-70"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img1: data.attributes.img1.data.attributes.url,
                quantity,
              })
            )
          }
          className="addCart bg-red-400 w-36 text-lg text-white rounded-sm h-10 flex justify-center items-center hover:opacity-70"
        >
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
