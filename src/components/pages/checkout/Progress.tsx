const Progress = () => {
  return (
    <div className="flex  justify-center items-center">
      <div className=" w-full">
        <div className="flex items-center">
          <p className="bg-black  text-white  rounded-full h-[30px] w-[30px] flex items-center justify-center">
            1
          </p>
          <hr className="w-full bg-black h-1" />
        </div>
        <span className="font-bold">Cart</span>
      </div>
      <div className=" w-full">
        <div className="flex items-center">
          <p className="bg-black  text-white  rounded-full h-[30px] w-[30px] flex items-center justify-center">
            2
          </p>
          <hr className="w-full bg-black h-1" />
        </div>
        <span className="font-bold">Shipping</span>
      </div>
      <div className=" w-full">
        <div className="flex items-center">
          <p className="bg-black  text-white  rounded-full h-[30px] w-[30px] flex items-center justify-center">
            3
          </p>
        </div>
        <span className="font-bold">Place</span>
      </div>
    </div>
  );
};

export default Progress;
