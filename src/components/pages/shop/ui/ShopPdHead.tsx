import Selection from "@/components/common/Selection";
import { BsChevronDown } from "react-icons/bs";
import { TfiFilter } from "react-icons/tfi";

const ShopPdHead = () => {
  return (
    <div className="bg-white p-3 flex justify-between items-center rounded-md shadow-lg">
      <div className="flex gap-2 items-center">
        <p>Sort By:</p>

        <Selection />
      </div>
      <div className="hover:underline flex items-center gap-2">
        <b>119</b> results
        <span className="lg:hidden">
          <TfiFilter size={22} />
        </span>
      </div>
    </div>
  );
};

export default ShopPdHead;
