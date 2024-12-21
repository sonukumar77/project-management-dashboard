const Button = ({ text, btnStyle, children, onClick }) => {
  return (
    <button
      className={`text-white text-sm rounded px-2 py-1 mr-2 ${btnStyle}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
