"use client";

import { TfiWorld } from "react-icons/tfi";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import SearchForm from "./SearchForm";
import Dropdown from "../common/Dropdown";
import LoginDropdown from "./LoginDropdown";
import LanguageDropdown from "./LanguageDropdown";
import CartDropdown from "./CartDropdown";

const Header = () => {
  return (
    <div className="flex justify-between items-center my-2 relative container mx-auto border p-2 rounded-md">
      <h1 className="font-bold text-2xl cursor-pointer">NAZSHOP</h1>
      <div className="flex gap-4 items-stretch">
        <SearchForm />
        <div className="flex gap-4">
          <div className="relative cursor-pointer group flex items-center">
            <AiOutlineShopping size={28} />
            <span className="absolute top-[10px] right-0 bg-black text-white  text-xs h-[15px] w-[15px] rounded-md flex items-center justify-center translate-x-[50%] translate-y-[-50%]">
              3
            </span>
            <Dropdown>
              <CartDropdown />
            </Dropdown>
          </div>
          <div className="relative cursor-pointer group flex items-center">
            <TfiWorld size={23} className="cursor-pointer" />

            <Dropdown>
              <LanguageDropdown />
            </Dropdown>
          </div>
          <div className="relative cursor-pointer group flex items-center">
            <AiOutlineUser size={25} className={"cursor-pointer"} />

            <Dropdown>
              <LoginDropdown />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
