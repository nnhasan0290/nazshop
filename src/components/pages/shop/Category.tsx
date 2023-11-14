const Category = () => {
  return (
    <div>
      <h3 className="font-bold">Category</h3>
      <ul className="py-2">
        <li className="flex gap-2 items-center capitalize text-sm hover:underline cursor-pointer">
          <input type="checkbox" name="" id="" className="cursor-pointer" />
          category one
        </li>
        <li className="flex gap-2 items-center capitalize text-sm">
          <input type="checkbox" name="" id="" />
          category one
        </li>
        <li className="flex gap-2 items-center capitalize text-sm">
          <input type="checkbox" name="" id="" />
          category one
        </li>
      </ul>
    </div>
  );
};

export default Category;
