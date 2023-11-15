import { BsChevronDown } from "react-icons/bs";

const Selection = () => {
  return (
    <div className="relative group">
      <input
        className="outline-none cursor-pointer border p-2 w-[180px] disable rounded-md"
        type="text"
        value={"Best Match"}
      />
      <span className="absolute right-2 top-[50%] translate-y-[-50%] transition-all duration-300 group-hover:rotate-180">
        <BsChevronDown />
      </span>
      <div className="hidden group-hover:block rounded-sm shadow-lg bg-white  top-[100%] border right-0 min-w-full absolute z-10 animate-drop origin-top">
        {["Popularity", "Newest", "Price low to high", "Price high to low"].map(
          (each) => (
            <p className="hover:bg-gray-300 py-1 px-2 cursor-pointer transition-all duration-300">
              {each}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Selection;
