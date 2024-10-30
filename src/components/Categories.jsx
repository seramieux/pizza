import React from "react";

const Categories = ({ categoryId, onChangeCategory }) => {
  const list = [
    "Все",
    "Мясные",
    "Острые",
    "Сладкие",
    "Вегетарианские",
    "С курицей",
  ];
  return (
    <ul className="flex p-[7px] bg-[#FAFAFA] rounded-[15px] gap-[7px] select-none">
      {list.map((categoryName, index) => (
        <li
          key={index}
          onClick={() => onChangeCategory(index)}
          className={
            categoryId === index
              ? "py-[10px] px-[15px] rounded-[15px] bg-[#FFFFFF] text-[#FE5F00] font-medium text-[16px] leading-[22px] cursor-pointer shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]"
              : "py-[10px] px-[15px] font-medium text-[16px] leading-[22px] cursor-pointer rounded-[15px]"
          }
        >
          {categoryName}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
