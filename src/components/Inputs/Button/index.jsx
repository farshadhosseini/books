const Button = ({ title, loading, disabled }) => {
  return (
    <button
      disabled={disabled || loading}
      className="bg-violet-700 p-2 rounded-lg h-12 text-white lg:w-44 w-full hover:bg-violet-600 transition-all disabled:bg-violet-500 disabled:cursor-not-allowed"
      type="submit"
    >
      {loading ? "Please Wait ..." : title}
    </button>
  );
};
export default Button;
