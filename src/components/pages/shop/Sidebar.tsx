import NormalHead from "@/components/common/NormalHead";
import Separator from "@/components/common/Separator";
import Category from "./Category";

const Sidebar = () => {
  return (
    <div className="h-[100vh] sticky top-0 border px-5 py-3 bg-white rounded-md min-w-[300px]">
      <NormalHead>Filters</NormalHead>
      <Separator />
      <Category />
      <Separator />
    </div>
  );
};

export default Sidebar;
