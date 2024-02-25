import CItem from "../components/CItem";
import { commodities } from "../data/commodities";

const CList = () => {
  const sortedData = commodities;
  sortedData.sort((a, b) => a.rank - b.rank);

  return (
    <>
      <div id="accordion-open" data-accordion="open">
        {sortedData.map((c, i) => (
          <CItem data={c} i={i} />
        ))}
      </div>
    </>
  );
};
export default CList;
