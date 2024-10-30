import React from "react";
import Context from "../context";
import close from "../assets/img/x.svg";
import test from "../assets/img/test.png";
import arrowRight from "../assets/img/arrow-right.svg";

const Drawer = () => {
  const { openCart, setOpenCart } = React.useContext(Context);

  React.useEffect(() => {
    document.body.style.overflow = openCart ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openCart]);

  return (
    <div className="fixed left-0 top-0 z-[2] bg-[#00000099] h-[100%] w-[100%] truncate">
      <div className="absolute z-[1] w-[395px] h-[100vh] right-0 bg-[#f4f1ee]">
        <div className="flex justify-between items-center p-[20px]">
          <span className="text-[20px] leading-[28px]">3 товара на 829 ₽</span>
          <img
            onClick={() => setOpenCart(false)}
            className="w-[20px] h-[20px] cursor-pointer"
            src={close}
            alt="x"
          />
        </div>
        <div className="bg-[#FFF] p-[20px] flex items-center gap-[25px]">
          <img className="w-[65px] h-[65px]" src={test} alt="pizza" />
          <div className="flex flex-col">
            <div>
              <b>Чизбургер-пицца</b>
              <div className="w-[260px] h-[1px] border border-[#EDEDED] mt-[10px]"></div>
            </div>
            <div className="mt-[10px] flex justify-between items-center">
              <div className="flex gap-[10px] items-center">
                <button className="py-[2.5px] px-[11px] border border-[#FE5F00] text-[#FE5F00] rounded-[10px]">
                  -
                </button>
                <b className="text-[16px] leading-[22px]">0</b>
                <button className="py-[2.5px] px-[11px] border border-[#FE5F00] text-[#FE5F00] rounded-[10px]">
                  +
                </button>
              </div>
              <b className="text-[16px] leading-[22px]">965 ₽ </b>
            </div>
          </div>
        </div>
        <div className="w-[395px] bg-[#FFF] absolute bottom-0 py-[30px] px-[35px]">
          <div className="flex justify-between items-center">
            <p className="text-[16px] leading-[22px]">Сумма заказа</p>
            <b className="text-[18px] leading-[25px]">2245 ₽ </b>
          </div>
          <div className="relative bg-[#FE5F00] text-[#FFF] flex justify-center items-center py-[17px] rounded-[18px] mt-[20px] cursor-pointer">
            <button>Оформить заказ</button>
            <img
              className="absolute w-[14px] h-[12px] right-[50px]"
              src={arrowRight}
              alt="arrow-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
