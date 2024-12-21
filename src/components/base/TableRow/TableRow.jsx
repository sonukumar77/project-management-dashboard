const TableRow = ({ tableRowStyle, onRowClick, children }) => {
  return (
    <tr
      className={`border border-gray-400 text-center ${tableRowStyle}`}
      onClick={onRowClick}
    >
      {children}
    </tr>
  );
};

export default TableRow;
