import React from "react";

type FiltersProps = {
  filter: string;
  setFilter: (filter: string) => void;
};

const Filters: React.FC<FiltersProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex w-full px-3 py-2 rounded-lg justify-end">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="px-3 py-2 border rounded text-base"
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
};

export default Filters;
