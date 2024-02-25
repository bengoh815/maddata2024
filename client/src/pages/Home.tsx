import Navbar from "../components/Navbar";
import BasicPlot from "../components/BasicPlot";
import WeatherPlots from "../components/WeatherPlots";
import CList from "../components/CList";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* <BasicPlot /> */}
      {/* <WeatherPlots data={[{}]} /> */}

      <CList />
    </div>
  );
};

export default Home;
