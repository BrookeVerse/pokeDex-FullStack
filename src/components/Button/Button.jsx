import "./Button.scss"

const Button = ({style, onClick, imgStyle, children, textStyle, buttonText}) => {
  return (
    <button className={style} onClick={onClick}>
        <div className={imgStyle}>{children}</div>
        <p className={textStyle}>{buttonText}</p>
    </button>
  )
}

export default Button