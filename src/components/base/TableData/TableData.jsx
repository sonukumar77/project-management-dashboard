const TableData = ({ tableDataStyle, onClick, children, content }) => {
  return (
    <td className={`p-2 ${tableDataStyle}`} onClick={onClick}>
      {content}
      {children}
    </td>
  );
};

export default TableData;
