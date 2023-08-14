import React, { useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";

const Products = () => {
  const [priceRange, setPriceRange] = useState(1000);
  const categoryId = parseInt(useParams().id);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const { data, loading, error } = useFetch(
    `sub-categories?filters[categories][id][$eq]=${categoryId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    setSelectedSubCategories(
      checked
        ? [...selectedSubCategories, value]
        : selectedSubCategories.filter((item) => item !== value)
    );
  };

  return (
    <div className="products flex mb-24">
      <div className="left flex-[1] ml-5 flex flex-col gap-10 sticky top-3 h-full ">
        <div className="filter flex flex-col self-start h-fit">
          <h1 className=" text-lg font-semibold">Product categories</h1>
          <div className="filteritem flex flex-col justify-center items-start">
            {error
              ? "Something went wrong.."
              : loading
              ? "Loading .."
              : data?.map((item) => (
                  <div className="flex gap-2 capitalize" key={item.id}>
                    <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={handleChange}
                    />
                    <label htmlFor={item.id}>{item.attributes.title}</label>
                  </div>
                ))}
          </div>
        </div>
        <div className="filter flex flex-col self-start h-fit">
          <h1 className=" text-lg font-semibold">Filter by price</h1>
          <div className="filteritem flex justify-center items-center gap-2">
            <span>0</span>
            <input
              type="range"
              min={1}
              max={999}
              onChange={(e) => setPriceRange(e.target.value)}
            />
            <span>IDR {priceRange} K</span>
          </div>
        </div>
        <div className="filter flex flex-col self-start h-fit">
          <h1 className=" text-lg font-semibold">Sort by</h1>
          <div className="filteritem flex flex-col justify-center items-center gap-2">
            <div className=" flex gap-2">
              <input type="radio" id="lowestPrice" name="price" />
              <label htmlFor="lowestPrice">Lowest Price</label>
            </div>
            <div className=" flex gap-2">
              <input type="radio" id="highestPrice" name="price" />
              <label htmlFor="highestPrice">Highest Price</label>
            </div>
          </div>
        </div>
      </div>
      <div className="right flex-[4] ">
        <div className="top w-full h-64 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4448861/pexels-photo-4448861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=" w-full object-cover"
          />
        </div>
        <div className="bottom ">
          <List
            priceRange={priceRange}
            categoryId={categoryId}
            selectedSubCategories={selectedSubCategories}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
