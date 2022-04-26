const Button = ({ text, type, onClick, className,color }) => {
  return (
    <button type={type} className={className} onClick={onClick} color={color}>
      {text}
    </button>
  );
};

export default Button;
