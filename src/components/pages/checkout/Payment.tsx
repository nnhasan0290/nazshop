import Button from "@/components/common/Button";

const Payment = () => {
  return (
    <div className="bg-white shadow-lg p-5 grid gap-3 rounded-md">
      <h2 className="font-bold">Payment</h2>
      <div className="flex gap-2 items-center">
        <input type="radio" name="" id="" checked />
        <label htmlFor="">Bkash</label>
      </div>
      <Button>Pay With Bkash</Button>
    </div>
  );
};

export default Payment;
