import React from "react";
import Card from "../Card/Card.jsx";

const Sections = ({ type }) => {
  const items = [
    {
      id: 1,
      title: "Peaky blinder's Coat",
      img1: "https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=1600",
      oldPrice: 52,
      newPrice: 45,
      newItem: true,
    },
    {
      id: 2,
      title: "Red Woman's Coat",
      img1: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1906877/pexels-photo-1906877.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      oldPrice: 42,
      newPrice: 35,
      newItem: false,
    },
    {
      id: 3,
      title: "Grey Woman's Coat",
      img1: "https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/2043592/pexels-photo-2043592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldPrice: 33,
      newPrice: 30,
      newItem: false,
    },
    {
      id: 4,
      title: "Red Woman's Coat",
      img1: "https://images.pexels.com/photos/3951783/pexels-photo-3951783.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/3951785/pexels-photo-3951785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldPrice: 58,
      newPrice: 49,
      newItem: true,
    },
  ];

  return (
    <div className="sections my-24 mx-48">
      <section className="flex justify-center items-center flex-col">
        <div className="top flex justify-between items-center">
          <h1 className="capitalize flex flex-[2] text-3xl font-semibold">
            {type} Products
          </h1>
          <span className="flex flex-[3] text-justify text-gray-600">
            Vintage vinyl records collection - various genres from the '60s to
            '90s. Well-preserved and in excellent condition. Price varies per
            record or discounted for the whole collection. Vintage vinyl records
            collection - various genres from the '60s to '90s. Well-preserved
            and in excellent condition. Price varies per record or discounted
            for the whole collection.
          </span>
        </div>
        <div className="bottom flex justify-center items-center gap-3">
          {items.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sections;
