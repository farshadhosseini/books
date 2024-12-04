import { useEffect, useState } from "react";

export const Pagination = ({ totalPages, currentPage, onChange }) => {
  const [total, setTotal] = useState([]);
  const handleChange = (page) => {
    onChange(page);
  };

  const handleNext = () => {
    onChange(currentPage + 1);
  };

  const handlePrev = () => {
    onChange(currentPage - 1);
  };

  useEffect(() => {
    setTotal(Array.from({ length: totalPages }, (_, index) => index + 1));
  }, [totalPages]);

  return (
    <div className="flex gap-1">
      <button
        disabled={currentPage === 1}
        onClick={currentPage === 1 ? () => {} : handlePrev}
        className="bg-slate-200 cursor-pointer rounded-md border font-light w-10 h-10"
      >
        prev
      </button>
      {currentPage > 2 ? (
        <>
          <input
            onClick={() => handleChange(total[0])}
            className="bg-slate-200 cursor-pointer rounded-md border font-light w-10 h-10"
            type="button"
            value={String(total[0])}
          />
          <button
            onClick={() => handleChange(currentPage - 1)}
            className="bg-slate-200 cursor-pointer rounded-md border font-light w-10 h-10"
          >
            ...
          </button>
        </>
      ) : null}
      <div className="flex gap-1">
        {(total.length > 2
          ? total.slice(currentPage <= 2 ? 0 : currentPage - 2, currentPage + 1)
          : total
        ).map((item) => (
          <input
            key={item}
            onClick={() => handleChange(item)}
            className={`cursor-pointer rounded-md border font-light w-10 h-10 ${
              currentPage === item ? "bg-violet-600 text-white" : "bg-slate-200"
            }`}
            type="button"
            name="options"
            value={String(item)}
          />
        ))}
      </div>
      {total.length - 1 > currentPage ? (
        <>
          <button
            onClick={() => handleChange(currentPage + 1)}
            className="bg-slate-200 cursor-pointer rounded-md border font-light w-10 h-10"
          >
            ...
          </button>
          <input
            onClick={() => handleChange(total.length)}
            className="bg-slate-200 cursor-pointer rounded-md border font-light w-10 h-10"
            type="button"
            value={String(total.length)}
          />
        </>
      ) : null}
      <button
        disabled={currentPage === total.length}
        onClick={currentPage === total.length ? () => {} : handleNext}
        className="bg-slate-200 cursor-pointer rounded-md border font-light w-10 h-10"
      >
        next
      </button>
    </div>
  );
};
