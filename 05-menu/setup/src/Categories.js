import React from "react";

const Categories = ({ filterItems, allCategories }) => {
  return (
    <section className="btn-container">
      {allCategories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Categories;
