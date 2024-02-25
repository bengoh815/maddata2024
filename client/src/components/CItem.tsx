import { useState } from "react";
import BasicPlot from "./BasicPlot";
import CNews, { NewsData } from "./CNews";

export type Commodity = {
  name: string;
  rank: number;
  post?: NewsData;
  dates: string[];
  temps: number[];
  productions: number[];
  prices: number[];
};

const CItem: React.FC<{ data: Commodity; i: number }> = ({ data, i }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  return (
    <div key={i} className="m-2">
      <h2 id={`accordion-open-heading-${i}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-50 gap-3"
          data-accordion-target={`#accordion-open-body-${i}`}
          aria-expanded="false"
          aria-controls={`accordion-open-body-${i}`}
          onClick={toggleOpen}
        >
          <span className="flex items-center gap-5">
            <div className="w-8 text-left">#{data.rank}</div>
            <div className="w-8">{data.name}</div>
          </span>
          <svg
            data-accordion-icon
            className={
              open ? "w-3 h-3 shrink-0 rotate-180" : "w-3 h-3 shrink-0"
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-open-body-${i}`}
        className={open ? "" : "hidden"}
        aria-labelledby="accordion-open-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <div className="flex justify-between">
            <BasicPlot data={data} />
            {data.post && <CNews data={data.post} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CItem;
