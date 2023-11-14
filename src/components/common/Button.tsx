const Button = ({ children }: any) => {
  return (
    <button className="bg-black hover:bg-hovered text-white p-2 rounded-md">
      {children}
    </button>
  );
};

export default Button;
