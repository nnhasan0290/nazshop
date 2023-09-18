import { BsTrash } from "react-icons/bs";
import Divider from "../common/Divider";
import Button from "../common/Button";
import IconButton from "../common/IconButton";

const CartDropdown = () => {
  return (
    <div className="w-[300px] flex flex-col">
      <h2 className="font-bold text-lg">Cart</h2>
      <Divider />
      <div className="flex items-stretch gap-3">
        <img className="w-[100px]" src="/imgs/girlwithbag.jpg" alt="" />
        <div className="flex flex-col justify-between grow">
          <div className="flex gap-3 justify-between items-center w-[180px]">
            <span className="truncate text-sm">
              this is a title this is another title
            </span>
            <div className="hover:text-red-500 transition-all duration-300">
              <BsTrash size={23} />
            </div>
          </div>
          <span className="font-bold">$52.99</span>
        </div>
      </div>
      <Divider />
      <div className="flex items-stretch gap-3">
        <img className="w-[100px]" src="/imgs/girlwithbag.jpg" alt="" />
        <div className="flex flex-col justify-between grow">
          <div className="flex gap-3 justify-between items-center w-[180px]">
            <span className="truncate text-sm">
              this is a title this is another title
            </span>
            <div className="hover:text-red-500 transition-all duration-300">
              <BsTrash size={23} />
            </div>
          </div>
          <span className="font-bold">$52.99</span>
        </div>
      </div>
      <Divider />
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
