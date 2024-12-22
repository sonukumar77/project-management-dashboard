import CrossIcon from "../../icons/CrossIcon";

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  children,
  modalStyle,
  footerBtnStyle,
  footerBtnText,
  modalTitle = "Modal",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`bg-white rounded-lg shadow-lg w-11/12 max-w-md ${modalStyle}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <h2 className="text-lg font-semibold">{modalTitle}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <CrossIcon width="24" height="24" className="stroke-slate-400" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4">{children}</div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-4 py-2 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
          <button
            onClick={onSubmit}
            className={`px-4 py-2 text-sm font-medium text-white  rounded hover:bg-blue-700 ${footerBtnStyle}`}
          >
            {footerBtnText ? footerBtnText : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
