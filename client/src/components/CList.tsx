import CItem from "../components/CItem";
import Item from "../components/CItem";
import commodities from "../data/commodities";

const CList = () => {
  return (
    <>
      <div id="accordion-open" data-accordion="open">
        <CItem
          data={{
            name: "Apple",
            rank: 68,
            dates: ["2022-01-01", "2022-02-01", "2022-03-01"],
            temp: [52, 63, 71],
            production: [1335, 1476, 1292],
            prices: [7, 8, 9],
          }}
          i={1}
        />
      </div>
    </>
  );
};
export default CList;
