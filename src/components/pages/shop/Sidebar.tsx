import NormalHead from "@/components/common/NormalHead";
import Separator from "@/components/common/Separator";
import Category from "./ui/Category";
import PriceFilter from "./ui/PriceFilter";
import RatingFilter from "./ui/RatingFilter";
import Location from "./ui/LocationFilter";
import WarrantyFilter from "./ui/WarrantyFilter";
import Button from "@/components/common/Button";

const Sidebar = () => {
  return (
    <div className="h-[100vh] sticky top-0 border px-5 py-3 bg-white rounded-md min-w-[250px] overflow-y-scroll shadow-sm">
      <NormalHead>Filters</NormalHead>
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
  );
};

export default Sidebar;
