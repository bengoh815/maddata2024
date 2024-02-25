import { Commodity } from "../components/CItem";

const commodities: Commodity[] = [
  {
    name: "Apple",
    rank: 68,
    dates: ["2022-01-01", "2022-02-01", "2022-03-01"],
    temp: [52, 63, 71],
    production: [1335, 1476, 1292],
    prices: [7, 8, 9],
  },
  {
    name: "Banana",
    rank: 41,
    dates: ["2022-01-01", "2022-02-01", "2022-03-01"],
    temp: [71, 68, 63],
    production: [1892, 1623, 1745],
    prices: [6, 5, 7],
  },
  {
    name: "Cherry",
    rank: 37,
    dates: ["2022-01-01", "2022-02-01", "2022-03-01"],
    temp: [74, 53, 61],
    production: [1421, 1133, 1024],
    prices: [9, 8, 6],
  },
  {
    name: "Blue Berries",
    rank: 62,
    dates: ["2022-01-01", "2022-02-01", "2022-03-01"],
    temp: [60, 62, 56],
    production: [1797, 1898, 1454],
    prices: [5, 7, 6],
  },
];
export default commodities;
