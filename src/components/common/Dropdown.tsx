const Dropdown = ({ children }: any) => {
  return (
    <div className="hidden group-hover:block bg-white p-3 top-[100%] right-0 border  min-w-[200px] absolute">
      {children}
    </div>
  );
};

export default Dropdown;
