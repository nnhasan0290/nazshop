"use client";
import { TfiSearch, TfiWorld } from "react-icons/tfi";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";

const Header = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-between items-center my-2">
      <h1 className="font-bold text-2xl">NAZSHOP</h1>
      <div className="flex gap-4">
        <form className="hidden sm:flex" onSubmit={handleSubmit} >
          <input
            className="border outline-none p-2 rounded-l-md border-r-0"
            type="text"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="border px-3 rounded-r-md hover:bg-black transition-all duration-300 hover:text-white"
          >
            <TfiSearch size={22} />
          </button>
        </form>
        <div className="flex gap-4 items-center">
          <TfiWorld size={23} className="cursor-pointer" />
          <AiOutlineUser size={25} className={"cursor-pointer"} />
          <div className="relative cursor-pointer">
            <AiOutlineShopping size={28} />
            <span className="absolute top-0 right-0 bg-black text-white  text-xs h-[15px] w-[15px] rounded-md flex items-center justify-center translate-x-[50%] translate-y-[-50%]">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
