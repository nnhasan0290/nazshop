import Divider from "@/components/common/Divider";
import NormalHead from "@/components/common/NormalHead";

const Summary = () => {
  return (
    <div className="bg-white shadow-lg rounded-md p-5 flex flex-col gap-4">
      <h2 className="font-bold">Products(5)</h2>
      <div className="flex gap-3 flex-wrap ">
        {Array(4)
          .fill(0)
          .map((each) => (
            <div className="relative">
              <img src="/imgs/pinkwall.jpg" width={100} alt="" />
              <div className="bg-black/50 absolute bottom-0 left-0 w-full text-gray-300 text-sm text-center">
                X1
              </div>
            </div>
          ))}
      </div>
      <Divider />
      <div className="grid text-sm font-semibold grid-cols-2 justify-between w-full  gap-2">
        <span>Subtotal</span>
        <span>$1838</span>
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <Divider />
      <div className="grid grid-cols-2">
        <NormalHead>Total </NormalHead>
        <NormalHead>$18383 </NormalHead>
      </div>
    </div>
  );
};

export default Summary;
