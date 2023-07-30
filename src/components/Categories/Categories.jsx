import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories m-3 flex gap-3 h-[80vh] ">
      <div className="col flex flex-col gap-3 flex-1 ">
        <div className="row flex flex-1 relative">
          <img
            src="https://images.pexels.com/photos/2146344/pexels-photo-2146344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover h-full w-full"
          />
          <Link to={"products/1"}>
            <button className=" absolute top-0 right-0 bottom-0 left-0 m-auto bg-gray-400 text-white rounded h-10 w-fit p-2 uppercase text-sm min-w-[80px] hover:bg-gray-300">
              Sale
            </button>
          </Link>
        </div>
        <div className="row flex flex-1 relative">
          <img
            src="https://images.pexels.com/photos/847414/pexels-photo-847414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover h-full w-full"
          />
          <Link to={"products/2"}>
            <button className=" absolute top-0 right-0 bottom-0 left-0 m-auto bg-gray-400 text-white rounded h-10 w-fit p-2 uppercase text-sm min-w-[80px] hover:bg-gray-300">
              New
            </button>
          </Link>
        </div>
      </div>

      <div className="col flex flex-col relative">
        <img
          src="https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover h-full w-full"
        />
        <Link to={"products/3"}>
          <button className=" absolute top-0 right-0 bottom-0 left-0 m-auto bg-gray-400 text-white rounded h-10 w-fit p-2 uppercase text-sm min-w-[80px] hover:bg-gray-300">
            Discount
          </button>
        </Link>
      </div>

      <div className="col flex flex-col gap-3 flex-1">
        <div className="col flex flex-row gap-3 ">
          <div className="row flex flex-1 relative">
            <img
              src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover h-full w-full"
            />
            <Link to={"products/4"}>
              <button className=" absolute top-0 right-0 bottom-0 left-0 m-auto bg-gray-400 text-white rounded h-10 w-fit p-2 uppercase text-sm min-w-[80px] hover:bg-gray-300">
                Trade
              </button>
            </Link>
          </div>
          <div className="row flex flex-1 relative">
            <img
              src="https://images.pexels.com/photos/1035673/pexels-photo-1035673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover h-full w-full"
            />
            <Link to={"products/5"}>
              <button className=" absolute top-0 right-0 bottom-0 left-0 m-auto bg-gray-400 text-white rounded h-10 w-fit p-2 uppercase text-sm min-w-[80px] hover:bg-gray-300">
                Secondhand
              </button>
            </Link>
          </div>
        </div>
        <div className="col flex flex-col  flex-[2] relative">
          <img
            src="https://images.pexels.com/photos/842539/pexels-photo-842539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover h-full w-full"
          />
          <Link to={"products/6"}>
            <button className=" absolute top-0 right-0 bottom-0 left-0 m-auto bg-gray-400 text-white rounded h-10 w-fit p-2 uppercase text-sm min-w-[80px] hover:bg-gray-300">
              Deal
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
