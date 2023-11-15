import NormalHead from "@/components/common/NormalHead";
import Separator from "@/components/common/Separator";
import Category from "./ui/Category";
import PriceFilter from "./ui/PriceFilter";
import RatingFilter from "./ui/RatingFilter";
import Location from "./ui/LocationFilter";
import WarrantyFilter from "./ui/WarrantyFilter";
import Button from "@/components/common/Button";
import { RxCross2 } from "react-icons/rx";

const MobileFilter = () => {
  return (
    <div className="fixed w-full h-full bg-black/50 top-0 left-0 lg:hidden">
      <div className="h-[100vh] absolute top-0 right-0 border px-5 py-3 bg-white rounded-md min-w-[250px] overflow-y-scroll shadow-lg">
        <div className="flex justify-between items-center">
          <NormalHead>Filters</NormalHead>
          <span>
            <RxCross2 size={24} />
          </span>
        </div>
        <Separator />
        <Category />
        <Separator />
        <PriceFilter />
        <Separator />
        <RatingFilter />
        <Separator />
        <Location />
        <Separator />
        <WarrantyFilter />
        <Separator />
        <button className="border w-full p-1 rounded-md bg-black hover:bg-hovered text-white">
          Reset
        </button>
      </div>
    </div>
  );
};

export default MobileFilter;
