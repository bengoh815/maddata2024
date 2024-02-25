import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
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
  console.log(chartData);

  const expData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="w-screen h-4/5 bg-black-50 m-2">
      banana
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={expData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temp" stroke="#3480eb" />
          {/* <Line type="monotone" dataKey="price" stroke="#eb8934" /> */}
          {/* <Line type="monotone" dataKey="production" stroke="#3480eb" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BasicPlot;
