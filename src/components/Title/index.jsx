import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="flex md:flex-row flex-col gap-1 md:items-end mb-2">
      <Link to="/" className="text-3xl font-bold text-blue-800">OPEN LIBRARY</Link>
      <span className="text-sm font-light text-slate-500">SEARCH ENGINE</span>
    </div>
  );
};

export default Title;
