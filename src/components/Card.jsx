const Card = ({ imageUrl, title, description, price }) => {
  return (
    <div className="mt-[65px]">
      <div className="py-[24px] px-[37px] bg-[#FFF7EE] rounded-[15px]">
        <img className="w-[211px] h-[212px]" src={imageUrl} alt="pizza" />
      </div>
      <div className="mt-[15px]">
        <b className="text-[22px] leading-[30px]">{title}</b>
        <p className="mt-[7px] text-[14px] leading-[21px] opacity-50">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-[13px]">
        <span className="text-[20px] leading-[28px]">
          от <b>{price} ₽</b>
        </span>
        <div className="flex gap-[7px] items-center py-[11px] px-[17px] bg-[#FFFAF4] rounded-[15px]">
          <img className="w-[12px] h-[12px]" src="/plus.svg" alt="plus" />
          <p className="font-semibold text-[15px] leading-[21px] text-[#FE5F00]">
            Добавить
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
