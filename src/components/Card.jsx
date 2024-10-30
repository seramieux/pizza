import plus from "../assets/img/plus.svg";

const Card = ({ imageUrl, title, description, price }) => {
  return (
    <div className="mt-[65px] relative h-[475px] w-[282.5px]">
      <div className="py-[24px] px-[37px] bg-[#FFF7EE] rounded-[15px]">
        <img className="w-[211px] h-[212px]" src={imageUrl} alt="pizza" />
      </div>
      <div className="mt-[15px]">
        <b className="text-[22px] leading-[30px]">{title}</b>
        <p className="mt-[7px] text-[14px] text-[#B1B1B1] leading-[21px]">
          {description}
        </p>
      </div>
      <div className="z-[1] absolute bottom-0 flex items-center gap-[79px] mt-[13px]">
        <span className="text-[20px] leading-[28px]">
          от <b>{price} ₽</b>
        </span>
        <div className="flex items-center gap-[7px] py-[11px] px-[17px] bg-[#FFFAF4] rounded-[15px]">
          <img className="w-[12px] h-[12px]" src={plus} alt="plus" />
          <button className="font-semibold text-[15px] leading-[21px] text-[#fe5f00]">
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
