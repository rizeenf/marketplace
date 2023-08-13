import Card from "../Card/Card.jsx";
import useFetch from "../../hook/useFetch.js";

const Sections = ({ type }) => {
  const { data, loading, error } = useFetch(
    `products?populate=*&filters[type][$eq]=${type}`
  );

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
          {error
            ? "Erorr .."
            : loading
            ? "Loading .."
            : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </section>
    </div>
  );
};

export default Sections;
