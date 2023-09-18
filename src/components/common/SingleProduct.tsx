import StarRatings from "react-star-ratings";
const SingleProduct = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img height={280} width={210} src="/imgs/girlwithbag.jpg" alt="" />
      <StarRatings starDimension="20px" starSpacing="3px" />
      <h3>This is product title</h3>
      <span>$29.00</span>
    </div>
  );
};

export default SingleProduct;
