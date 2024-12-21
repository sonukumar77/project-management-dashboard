const SimpleCard = ({ title, value, cardStyle, children, onCardClick }) => {
  return (
    <div
      className={`bg-white rounded sm:w-[48%] md:w-[30%] lg:w-[22%]  h-[100px] p-4 shadow-lg ${cardStyle}`}
      onClick={onCardClick}
    >
      <p>{title}</p>
      <div className="text-2xl font-semibold">{value}</div>
      {children}
    </div>
  );
};

export default SimpleCard;
