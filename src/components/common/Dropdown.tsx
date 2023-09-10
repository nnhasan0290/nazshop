const Dropdown = ({ children }: any) => {
  return (
    <div className="hidden group-hover:block rounded-sm shadow-lg bg-white p-3 top-[100%] border right-0 min-w-[200px] absolute">
      {children}
    </div>
  );
};

export default Dropdown;
