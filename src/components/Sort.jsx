import { useState } from "react";

const Sort = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const list = ["популярности", "цене", "алфавиту"];

  const onClickListItem = (index) => {
    setSelected(index);
    setOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-[#FAFAFA] py-[17px] px-[22px] rounded-[15px] gap-[7px]">
        <img className="w-[16px] h-[14px]" src="/arrow.svg" alt="arrow" />
        <b className="text-[16px] leading-[22px]">Сортировка по:</b>
        <b
          onClick={() => setOpen(!open)}
          className="text-[16px] leading-[22px] text-[#FE5F00] cursor-pointer"
        >
          {list[selected]}
        </b>
      </div>
      {open && (
        <ul className="absolute rounded-[10px] right-0 bg-[#FFFFFF] py-[10px] cursor-pointer select-none mt-[5px]">
          {list.map((value, index) => (
            <li
              key={index}
              onClick={() => onClickListItem(index)}
              className={
                selected === index
                  ? "font-bold text-[16px] leading-[17px] rounded-[10px] tracking-[1.5%] py-[10px] text-[#FE5F1E] px-[17px] bg-[#FE5F1E0D]"
                  : "text-[16px] leading-[17px] rounded-[10px] tracking-[1.5%] py-[10px] px-[17px] hover:bg-[#FE5F1E0D]"
              }
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
