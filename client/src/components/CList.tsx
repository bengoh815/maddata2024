import CItem from "../components/CItem";
import commodities from "../data/commodities";

const CList = () => {
  return (
    <>
      <div id="accordion-open" data-accordion="open">
        {commodities.map((c, i) => (
          <CItem data={c} i={i} />
        ))}
      </div>
    </>
  );
};
export default CList;
