const ListItem = ({ listItemStyle, children, onClick }) => {
  return (
    <li
      className={`w-full px-4 py-2 cursor-pointer ${listItemStyle}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default ListItem;
