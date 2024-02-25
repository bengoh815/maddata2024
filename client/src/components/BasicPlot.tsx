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

const BasicPlot: React.FC<{ data: Commodity }> = ({ data }) => {
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

  const scaleProduction = (chartData: ChartData[]) => {
    for (let i = 0; i < chartData.length; i++) {
      chartData[i].production /= 1000000;
    }
  };
  scaleProduction(chartData);
  const screenWidth = window.innerWidth;

  return (
    <div className=" m-2">
      <LineChart
        width={(screenWidth * 3) / 6}
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
        <Line type="monotone" dataKey="temp" stroke="#3480eb" />
        <Line type="monotone" dataKey="price" stroke="#eb8934" />
        <Line type="monotone" dataKey="production" stroke="#34eb37" />
      </LineChart>
    </div>
  );
};

export default BasicPlot;
