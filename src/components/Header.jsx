import logo from "../assets/img/logo.png";
import cart from "../assets/img/cart.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-[50px] px-[65px] border-b border-b-[#EDEDED]">
      <div className="flex items-center gap-[15px]">
        <img className="w-[35px] h-[35px]" src={logo} alt="logo" />
        <div>
          <h1 className="font-black text-[24px] leading-[33px] tracking-[1%]">
            Пицца
          </h1>
          <p className="text-[16px] leading-[22px] opacity-50">
            вкусней уже некуда
          </p>
        </div>
      </div>
      <div className="flex items-center rounded-[15px] bg-[#FE5F00] text-[#FFF] py-[15px] px-[23px]">
        <b className="mr-[13px] text-[16px] leading-[22px]">1000 ₽</b>
        <div className="w-[1px] h-[25px] bg-[#FFFFFF40] mr-[13px]"></div>
        <div className="flex items-center gap-[7px]">
          <img className="w-[16px] h-[16px]" src={cart} alt="cart" />
          <b className="text-[16px] leading-[22px]">1</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
