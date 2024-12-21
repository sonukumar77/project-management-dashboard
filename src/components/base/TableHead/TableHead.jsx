const TableHead = ({ text, onClick, headStyle, children }) => {
  return (
    <th onClick={onClick} className={`p-2 ${headStyle}`}>
      {text}
      {children}
    </th>
  );
};

export default TableHead;
