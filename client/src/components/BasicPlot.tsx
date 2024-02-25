import { Data, Layout } from "plotly.js";
import Plot from "react-plotly.js";

const BasicPlot = () => {
  const data: Data[] = [
    {
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 3, 4, 5],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "red" },
    },
  ];
  const layout = {
    title: "Simple Line Chart",
    xaxis: {
      title: "X-axis",
    },
    yaxis: {
      title: "Y-axis",
    },
    width: 100,
    height: 100,
    autosize: true,
  };

  return (
    <div className="w-1/4 m-2">
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default BasicPlot;
