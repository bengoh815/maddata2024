import { Data } from "plotly.js";
import Plot from "react-plotly.js";

const WeatherPlots: React.FC<{ data: Data[] }> = ({ data }) => {
  const commodityName = "Placeholder";
  const date = [
    "2022-01-31",
    "2022-02-28",
    "2022-03-31",
    "2022-04-30",
    "2022-05-31",
    "2022-06-30",
    "2022-07-31",
    "2022-08-31",
    "2022-09-30",
    "2022-10-31",
    "2022-11-30",
    "2022-12-31",
    "2023-01-31",
  ];
  const value = [
    -4.869354838709677, -3.5660714285714286, 3.2225806451612904,
    8.639999999999999, 16.488709677419354, 22.926666666666666,
    24.924193548387095, 23.537096774193547, 20.043333333333333, 11.45,
    1.3649999999999998, -6.432258064516129, -5.837096774193548,
  ];
  data = [
    {
      x: date,
      y: value,
      mode: "lines",
      marker: { color: "blue" },
    },
  ];
  const layout = {
    title: `Weather Chart for ${commodityName}`,
    xaxis: {
      title: "Months",
    },
    yaxis: {
      title: "Temperature (C)",
    },
  };

  return (
    <div className="m-2">
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default WeatherPlots;
