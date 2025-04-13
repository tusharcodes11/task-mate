// components/FilterBar.jsx
import React from "react";

const FilterBar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, categories }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-white rounded shadow mb-4">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 p-2 border rounded"
      />

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Categories</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
