import SectionHead from "../common/SectionHead";
import SingleProduct from "../common/SingleProduct";

const NewArrival = () => {
  return (
    <div className="flex flex-col gap-5 container mx-auto justify-center items-center py-10">
      <SectionHead>New Arrivals</SectionHead>
      <div className="flex gap-4 flex-wrap">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </div>
  );
};

export default NewArrival;
