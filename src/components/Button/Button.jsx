import "./Button.scss";

const Button = ({ style, onClick, textStyle, buttonText, value }) => {
  return (
    <button value={value} className={style} onClick={onClick}>
      <p className={textStyle}>{buttonText}</p>
    </button>
  );
};

export default Button;
