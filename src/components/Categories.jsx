import { useState } from "react";
const Categories = () => {
  const [selected, setSelected] = useState(0);
  const list = [
    "Все",
    "Мясные",
    "Острые",
    "Сладкие",
    "Вегетарианские",
    "С курицей",
    "Ещё",
  ];
  return (
    <ul className="flex p-[7px] bg-[#FAFAFA] rounded-[15px] gap-[7px] select-none">
      {list.map((value, index) => (
        <li
          key={index}
          onClick={() => setSelected(index)}
          className={
            selected === index
              ? "py-[10px] px-[15px] rounded-[15px] bg-[#FFFFFF] text-[#FE5F00] font-medium text-[16px] leading-[22px] cursor-pointer shadow-Categories"
              : "py-[10px] px-[15px] font-medium text-[16px] leading-[22px] cursor-pointer"
          }
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
