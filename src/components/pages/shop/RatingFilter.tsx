import StarRatings from "react-star-ratings";

const RatingFilter = () => {
  return (
    <div className="flex flex-col gap-2 pb-2">
      <h2 className="font-bold">Rating</h2>
      <StarRatings
        rating={5}
        starDimension="20px"
        starSpacing="3px"
        starRatedColor="#F59E0B"
      />
      <StarRatings
        rating={4}
        starDimension="20px"
        starSpacing="3px"
        starRatedColor="#F59E0B"
      />
      <StarRatings
        rating={3}
        starDimension="20px"
        starSpacing="3px"
        starRatedColor="#F59E0B"
      />
      <StarRatings
        rating={2}
        starDimension="20px"
        starSpacing="3px"
        starRatedColor="#F59E0B"
      />
      <StarRatings
        rating={1}
        starDimension="20px"
        starSpacing="3px"
        starRatedColor="#F59E0B"
      />
    </div>
  );
};

export default RatingFilter;
