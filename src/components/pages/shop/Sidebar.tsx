import NormalHead from "@/components/common/NormalHead";
import Separator from "@/components/common/Separator";
import Category from "./Category";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import Location from "./LocationFilter";
import WarrantyFilter from "./WarrantyFilter";

const Sidebar = () => {
  return (
    <div className="h-[100vh] sticky top-0 border px-5 py-3 bg-white rounded-md min-w-[250px] overflow-y-scroll">
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
    </div>
  );
};

export default Sidebar;
