import StarRatings from "react-star-ratings";
import Button from "./Button";
import NormalHead from "./NormalHead";
const SingleProduct = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[.5rem] group hover:shadow-lg rounded-sm transition-all duration-300 cursor-pointer">
      <div className="relative">
        <img
          className="object-cover h-[300px] rounded-sm"
          src="/imgs/girlwithbag.jpg"
          alt=""
        />
        <img
          src="/imgs/pinkwall.jpg"
          alt=""
          className="h-[300px] object-cover absolute rounded-sm inset-0 hidden group-hover:block animate-scale"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-[0.5rem] p-5">
        <StarRatings
          rating={5}
          starDimension="20px"
          starSpacing="3px"
          starRatedColor="#F59E0B"
        />
        <NormalHead>This is product title</NormalHead>
        <span>$29.00</span>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default SingleProduct;
