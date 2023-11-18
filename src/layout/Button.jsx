const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-1 border-white bg-[#11BB60] hover:text-[#2a3730] transition-all rounded-full">{props.title}</button>
    </div>
  );
};

export default Button;
