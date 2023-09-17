const Dropdown = ({ children }: any) => {
  return (
    <div className="hidden group-hover:block rounded-sm shadow-lg bg-white p-3 top-[100%] border right-0 min-w-[250px] absolute z-10 animate-drop origin-top before:content-[''] before:absolute before:h-[15px] before:w-[15px] before:border-t before:border-l before:top-0 before:right-1 before:bg-white before:translate-y-[-50%] before:rotate-45">
      {children}
    </div>
  );
};

export default Dropdown;
