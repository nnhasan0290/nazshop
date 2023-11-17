const Input = ({ label }: any) => {
  return (
    <div>
      <input
        className="text-sm outline-none border rounded-md w-full p-2"
        placeholder={label}
        type="text"
      />
    </div>
  );
};

export default Input;
