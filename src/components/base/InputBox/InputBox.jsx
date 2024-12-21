const InputBox = ({
  name,
  value,
  inputType,
  onInputChange,
  inputStyle,
  inputContainerStyle,
  placeholder,
  onBlur,
  onFocus,
  labelText,
  labelStyle,
  labelFor,
  children,
}) => {
  return (
    <div className={`p-2 flex flex-col ${inputContainerStyle}`}>
      {labelText ? (
        <label htmlFor={labelFor} className={`mb-[1px] ${labelStyle}`}>
          {labelText}
        </label>
      ) : null}
      <input
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onInputChange}
        onBlur={onBlur}
        onFocus={onFocus}
        name={name}
        className={`pl-2 p-2 outline-none border border-gray-400 rounded ${inputStyle}`}
      />
      {children}
    </div>
  );
};

export default InputBox;
