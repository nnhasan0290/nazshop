const Category = () => {
  return (
    <div>
      <h3 className="font-bold">Category</h3>
      <ul className="py-2 flex flex-col gap-2">
        {Array(6)
          .fill(0)
          .map((each) => (
            <li className="flex gap-2 items-center capitalize text-sm hover:underline cursor-pointer">
              <input type="checkbox" name="" id="" className="cursor-pointer" />
              category one
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Category;
