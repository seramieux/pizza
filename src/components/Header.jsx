import { useContext } from "react";
import Context from "../context";
import Search from "../components/Search";
import logo from "../assets/img/logo.png";

const Header = () => {
  const { setOpenCart } = useContext(Context);
  return (
    <div className="flex justify-between items-center py-[50px] px-[65px]">
      <div className="flex items-center gap-[15px]">
        <img className="w-[35px] h-[35px]" src={logo} alt="logo" />
        <div>
          <h2 className="font-black text-[24px] leading-[33px] tracking-[1%]">
            Пицца
          </h2>
          <p className="text-[16px] text-[#7B7B7B] leading-[22px]">
            вкусней уже некуда
          </p>
        </div>
      </div>
      <Search />
      <p
        className="bg-[#fe5f00] text-[#FFF] text-[16px] font-semibold py-[15px] px-[23px] leading-[22px] rounded-[15px] cursor-pointer"
        onClick={() => setOpenCart(true)}
      >
        Корзина
      </p>
    </div>
  );
};

export default Header;
