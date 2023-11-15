import SingleProduct from "@/components/common/SingleProduct";
import Sidebar from "./Sidebar";
import ShopPdHead from "./ui/ShopPdHead";

const ShopMain = () => {
  return (
    <div className="flex  py-5 items-start gap-5 container mx-auto">
      <Sidebar />
      <div className="flex flex-col w-full gap-5">
        <ShopPdHead />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 bg-white p-3 rounded-md shadow-lg">
          {Array(10)
            .fill(0)
            .map((each) => (
              <SingleProduct />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
