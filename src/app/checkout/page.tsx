import Button from "@/components/common/Button";
import IconButton from "@/components/common/IconButton";
import Payment from "@/components/pages/checkout/Payment";
import Progress from "@/components/pages/checkout/Progress";
import ShippingForm from "@/components/pages/checkout/ShippingForm";
import Summary from "@/components/pages/checkout/Summary";
import { BsChevronBarLeft, BsChevronLeft } from "react-icons/bs";

const Checkout = () => {
  return (
    <div className="flex flex-col gap-10 container mx-auto">
      <div className="flex items-center border-b sticky top-0 p-2 bg-white z-10">
        <IconButton icon={<BsChevronLeft size={25} />} />
        <h2 className="w-full text-center font-bold text-xl">
          Order Confirmation
        </h2>
      </div>
      <Summary />
      {/* <Progress /> */}
      <ShippingForm />
      <Payment />
    </div>
  );
};

export default Checkout;
