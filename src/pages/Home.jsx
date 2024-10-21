import { useState, useEffect } from "react";
import axios from "axios";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Card from "../components/Card";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const apiUrl = "https://6703a869ab8a8f8927311299.mockapi.io/items";
    axios.get(apiUrl).then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div className="py-[40px] px-[65px]">
      <b className="font-extrabold text-[36px] leading-[49px]">Все пиццы</b>
      <div className="flex justify-between items-center mt-[20px]">
        <Categories />
        <Sort />
      </div>
      <div className="grid grid-cols-4 gap-[40px]">
        {items.map((object) => (
          <Card key={object.id} {...object} />
        ))}
      </div>
    </div>
  );
};

export default Home;
