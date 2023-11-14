import SectionHead from "../common/SectionHead";
import SingleProduct from "../common/SingleProduct";

const NewArrival = () => {
  return (
    <div className="flex flex-col gap-5 container mx-auto justify-center items-center py-10">
      <SectionHead>New Arrivals</SectionHead>
      <div className="grid gap-5 grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </div>
  );
};

export default NewArrival;
