import { useContext } from "react";
import Context from "../context";
import search from "../assets/img/search.svg";
import clear from "../assets/img/x.svg";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(Context);
  return (
    <div className="bg-[#f9f9f9] flex items-center gap-[12px] p-[15.5px] rounded-[15px]">
      <img src={search} alt="search" />
      <input
        className="bg-[#f9f9f9] w-[681px] outline-none"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Поиск..."
      />
      {searchValue && (
        <img
          className="cursor-pointer"
          onClick={() => setSearchValue("")}
          src={clear}
          alt="x"
        />
      )}
    </div>
  );
};

export default Search;
