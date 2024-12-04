import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import Title from "../components/Title";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="bg-white p-6 rounded-2xl md:w-2/3 w-10/12 shadow-2xl">
        <Title />
        <Search
          onProgress={() => {}}
          onComplelte={(data, pages, query) => {
            navigate("./books", { state: { data, pages, query } });
          }}
        />
      </div>
    </div>
  );
};

export default Home;
