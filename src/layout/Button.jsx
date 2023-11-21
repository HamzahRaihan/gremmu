import PropTypes from 'prop-types';

const Button = (props) => {
  const buttonStyle = 'font-bold px-6 py-2 rounded-md transition-all duration-300 max-[980px]:w-full';

  const masukStyle = 'text-[#F58549] border-[#F58549] hover:text-white hover:bg-[#FFA500]';

  const daftarStyle = 'text-white bg-[#11BB60] border-[#11BB60] hover:text-[#11BB60] hover:bg-white';

  return (
    <div>
      <button className={`${buttonStyle} ${props.type === 'masuk' ? masukStyle : daftarStyle}`} onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
