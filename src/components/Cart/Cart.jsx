import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });

    return total.toFixed(0);
  };

  return (
    <div className="cart w-96 min-h-96 bg-white shadow-md rounded-md absolute top-16 right-3 z-30 flex flex-col gap-5 ">
      <div className="title text-gray-500 font-semibold text-center">
        Products in your cart
      </div>
      {products?.map((item) => (
        <div
          className="item flex justify-center items-center gap-2 mx-5"
          key={item.id}
        >
          <div className="img flex 1">
            <img
              src={import.meta.env.VITE_APP_URL + item?.img1}
              className="h-24 w-18 rounded"
            />
          </div>
          <div className="details flex flex-col flex-wrap gap-1 flex-[2]">
            <span className="text-sm text-gray-700">{item?.title}</span>
            <span className=" text-xs text-gray-400">
              {item?.desc.substring(0, 100)}
            </span>
            <span className="text-blue-800 font-semibold">
              {item?.quantity} x IDR {item?.price}.000
            </span>
          </div>
          <div
            onClick={() =>
              dispatch(
                removeFromCart({
                  id: item.id,
                })
              )
            }
            className="cancel flex 1 cursor-pointer hover:opacity-70"
          >
            <DeleteOutlinedIcon />
          </div>
        </div>
      ))}
      <div className="total flex items-center justify-between mx-5">
        <span>Subtotal</span>
        <span className="text-blue-600 text-lg font-semibold">
          IDR {totalPrice()}.000
        </span>
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
