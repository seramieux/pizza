import React from "react";
import Context from "../context";
import axios from "axios";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const { searchValue } = React.useContext(Context);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности (DESC)",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    const apiUrl = "https://6703a869ab8a8f8927311299.mockapi.io/items?";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    setIsLoading(true);
    axios
      .get(`${apiUrl + category}&sortBy=${sortBy}&order=${order}`)
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType]);

  return (
    <div className="py-[40px] px-[65px]">
      <span className="text-[36px] font-extrabold leading-[49px]">
        Все пиццы
      </span>
      <div className="flex justify-between items-center mt-[20px]">
        <Categories
          categoryId={categoryId}
          onChangeCategory={(index) => setCategoryId(index)}
        />
        <Sort
          sortType={sortType}
          onChangeSort={(index) => setSortType(index)}
        />
      </div>
      <div className="grid grid-cols-4 gap-[40px]">
        {isLoading
          ? [...Array(30)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter(({ title }) =>
                title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item) => <Card key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
