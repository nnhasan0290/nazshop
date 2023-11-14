const WarrantyFilter = () => {
  return (
    <div>
      <h3 className="font-bold">Warranty Type</h3>
      <ul className="py-2 flex flex-col gap-2">
        <li className="flex gap-2 items-center capitalize text-sm hover:underline cursor-pointer">
          <input type="checkbox" name="" id="" className="cursor-pointer" />
          No Warranty
        </li>
        <li className="flex gap-2 items-center capitalize text-sm hover:underline cursor-pointer">
          <input type="checkbox" name="" id="" className="cursor-pointer" />
          Seller Warranty
        </li>
        <li className="flex gap-2 items-center capitalize text-sm hover:underline cursor-pointer">
          <input type="checkbox" name="" id="" className="cursor-pointer" />
          Brand Warranty
        </li>
      </ul>
    </div>
  );
};

export default WarrantyFilter;
