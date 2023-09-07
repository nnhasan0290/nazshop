"use client";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import SearchForm from "./SearchForm";
import Dropdown from "../common/Dropdown";

const Header = () => {
  return (
    <div className="flex justify-between items-center my-2">
      <h1 className="font-bold text-2xl cursor-pointer">NAZSHOP</h1>
      <div className="flex gap-4">
        <SearchForm />
        <div className="flex gap-4 items-center">
          <TfiWorld size={23} className="cursor-pointer" />
          <AiOutlineUser size={25} className={"cursor-pointer"} />
          <div className="relative cursor-pointer">
            <AiOutlineShopping size={28} />
            <span className="absolute top-0 right-0 bg-black text-white  text-xs h-[15px] w-[15px] rounded-md flex items-center justify-center translate-x-[50%] translate-y-[-50%]">
              3
            </span>
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
