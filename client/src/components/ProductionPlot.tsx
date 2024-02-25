import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Commodity } from "./CItem";

type ChartData = {
  date: string;
  temp: number;
  price: number;
  production: number;
};

const ProductionPlot: React.FC<{ data: Commodity }> = ({ data }) => {
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
  const chartData: ChartData[] = convertData(data);
  const screenWidth = window.innerWidth;

  return (
    <div className=" m-2">
      <LineChart
        width={(screenWidth * 2) / 6}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="production" stroke="#3480eb" />
      </LineChart>
    </div>
  );
};

export default ProductionPlot;
