import DetailsArea from "./ui/DetailsArea";
import ImgArea from "./ui/ImageArea";

const ProductBody = () => {
  return (
    <div className="container lg:grid grid-cols-2 mx-auto my-10 items-center gap-5">
      <ImgArea />
      <DetailsArea />
    </div>
  );
};

export default ProductBody;
