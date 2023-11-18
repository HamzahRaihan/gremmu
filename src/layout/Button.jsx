const Button = (props) => {
  const buttonStyle = "font-bold px-6 py-1 rounded-md transition-all duration-300";

  const masukStyle = "text-[#F58549] border-[#F58549] hover:text-white hover:bg-[#FFA500]";

  const daftarStyle = "text-white bg-[#11BB60] border-[#11BB60] hover:text-[#11BB60] hover:bg-white";

  return (
    <div>
      <button className={`${buttonStyle} ${props.type === "masuk" ? masukStyle : daftarStyle}`} onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
};

export default Button;
