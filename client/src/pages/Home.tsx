import Navbar from "../components/Navbar";
import CList from "../components/CList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-50 gap-3">
        <span className="flex items-center gap-5">
          <div className="w-8 text-left">#{data.rank}</div>
          <div className="w-8">{data.name}</div>
        </span>
      </div>
      <CList />
    </div>
  );
};

export default Home;
