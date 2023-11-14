import Button from "@/components/common/Button";
import NormalHead from "@/components/common/NormalHead";

const PriceFilter = () => {
  return (
    <>
      <h3 className="font-bold pb-2">Price</h3>
      <div className="flex gap-2 items-center pb-2">
        <input className="price__input" type="number" placeholder="min" />
        <span>-</span>
        <input className="price__input" type="number" placeholder="max" />
        <button className="bg-black hover:bg-hovered text-white p-2 px-3 text-sm rounded-md">
          Apply
        </button>
      </div>
    </>
  );
};

export default PriceFilter;
