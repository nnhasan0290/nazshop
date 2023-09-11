import useOutsideClickHandler from "@/utils/IsClickedOnOutside";
import { useRef, useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import Dropdown from "../common/Dropdown";

const SearchForm = () => {
  //states
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const formRef = useRef(null);
  //methods
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  useOutsideClickHandler(formRef, () => setShowSearchDropdown(false));
  return (
    <form
      ref={formRef}
      className="hidden sm:flex relative"
      onSubmit={handleSubmit}
    >
      <input
        className="border outline-none p-2 rounded-l-md border-r-0"
        type="text"
        placeholder="Search..."
        onFocus={() => setShowSearchDropdown(true)}
      />
      <button
        type="submit"
        className="border px-3 rounded-r-md bg-black hover:bg-hovered transition-all duration-300 text-white"
      >
        <TfiSearch size={22} />
      </button>
      {showSearchDropdown && <Dropdown />}
    </form>
  );
};

export default SearchForm;
