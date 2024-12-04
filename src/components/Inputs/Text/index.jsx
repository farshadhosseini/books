const TextInput = ({ text, name, value, placeholder, onChangeHandler }) => {
  return (
    <input
      autoFocus
      className="border border-gray-300 p-3 rounded-lg w-full outline-none"
      type={text}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  );
};

export default TextInput;
