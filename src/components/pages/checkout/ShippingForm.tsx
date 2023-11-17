import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const ShippingForm = () => {
  return (
    <div className="bg-white shadow-lg p-5 grid gap-3 rounded-md">
      <h2 className="font-bold">Shipping Address</h2>
      <Input label="Country/Region" />
      <div className="grid grid-cols-2 gap-2">
        <Input label="First Name" />
        <Input label="Last Name" />
      </div>
      <Input label="Phone" />
      <Input label="Street" />
      <Input label="Building" />
      <Input label="State" />
      <Input label="City" />
      <Input label="Postal" />
      <Button>Continue</Button>
    </div>
  );
};

export default ShippingForm;
