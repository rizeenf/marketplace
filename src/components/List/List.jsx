import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hook/useFetch";

const List = ({ categoryId, priceRange, selectedSubCategories }) => {
  const { data, loading, error } = useFetch(
    `products?populate=*&filters[categories][id][$eq]=${categoryId}${selectedSubCategories.map(
      (item) => `&filters[subCategories][id][$eq]=${item}`
    )}&filters[price][$lte]=${priceRange}`
  );

  return (
    <div className="list flex flex-wrap justify-around w-full h-full gap-1 ">
      {error
        ? "Something went wrong .."
        : loading
        ? "Loading .."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
