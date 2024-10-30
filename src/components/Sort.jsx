import React from "react";
import arrows from "../assets/img/arrows.svg";

const Sort = ({ sortType, onChangeSort }) => {
  const [open, setOpen] = React.useState(false);
  const list = [
    { name: "популярности (DESC)", sortProperty: "rating" },
    { name: "популярности (ASC)", sortProperty: "-rating" },
    { name: "цене (DESC)", sortProperty: "price" },
    { name: "цене (ASC)", sortProperty: "-price" },
    { name: "алфавиту (DESC)", sortProperty: "title" },
    { name: "алфавиту (ASC)", sortProperty: "-title" },
  ];

  const onClickListItem = (index) => {
    onChangeSort(index);
    setOpen(false);
  };

  return (
    <div className="relative z-[1]">
      <div className="flex items-center bg-[#fafafa] py-[17px] px-[22px] rounded-[15px] gap-[7px]">
        <img className="w-[16px] h-[14px]" src={arrows} alt="arrows" />
        <b className="text-[16px] leading-[22px]">Сортировка по:</b>
        <b
          onClick={() => setOpen(!open)}
          className="text-[16px] leading-[22px] text-[#fe5f00] cursor-pointer"
        >
          {sortType.name}
        </b>
      </div>
      {open && (
        <ul className="rounded-[10px] right-0 bg-[#FFf] py-[10px] px-0 cursor-pointer select-none mt-[5px] absolute z-[1]">
          {list.map((object, index) => (
            <li
              key={index}
              onClick={() => onClickListItem(object)}
              className={
                sortType.sortProperty === object.sortProperty
                  ? "text-[16px] leading-[17px] rounded-[10px] tracking-[1.5%] py-[10px] px-[17px] bg-[#fe5f1e0d] text-[#fe5f1e] font-bold hover:bg-[#fe5f1e0d]"
                  : "text-[16px] leading-[17px] rounded-[10px] tracking-[1.5%] py-[10px] px-[17px] hover:bg-[#fe5f1e0d]"
              }
            >
              {object.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
