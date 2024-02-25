import Navbar from "../components/Navbar";
import BasicPlot from "../components/BasicPlot";
import CList from "../components/CList";
import commodities from "../data/commodities";
import { Commodity } from "../components/CItem";
import TestPlot from "../components/TestPlot";

type ChartData = {
  date: string;
  temp: number;
  price: number;
  production: number;
};

const Home = () => {
  const convertData = (data: Commodity) => {
    const chartData: ChartData[] = [];

    for (let i = 0; i < data.dates.length; i++) {
      chartData.push({
        date: data.dates[i],
        temp: data.temps[i],
        price: data.prices[i],
        production: data.productions[i],
      });
    }

    return chartData;
  };

  return (
    <div>
      <Navbar />

      {/* <BasicPlot data={commodities[0]} /> */}
      <TestPlot />

      {/* <CList /> */}
    </div>
  );
};

export default Home;
