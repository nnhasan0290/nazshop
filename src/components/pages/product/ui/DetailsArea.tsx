"use client";

import Button from "@/components/common/Button";
import NormalHead from "@/components/common/NormalHead";
import StarRatings from "react-star-ratings";

const DetailsArea = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div>
        <NormalHead>Elegant Turtleneck Ombre Reg Long</NormalHead>
        <div className="flex gap-1 items-end">
          <StarRatings
            rating={4}
            starDimension="20px"
            starSpacing="3px"
            starRatedColor="#F59E0B"
          />
          <span className="text-[12px]">(3 Ratings)</span>
        </div>
      </div>
      <h1 className="font-bold text-2xl">$18.4</h1>
      <div>
        <h1 className="font-semibold">Product Details</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipiscing elit mollis ad
          eleifend porttitor vulputate eget ligula in, mauris commodo facilisis
          laoreet velit justo taciti auctor at habitant lectus parturient
          convallis himenaeos. Aliquam class diam tempor taciti quis porttitor
          id magnis,
        </p>
      </div>
      <div>
        <Button>Add To Cart</Button>
      </div>
    </div>
  );
};

export default DetailsArea;
