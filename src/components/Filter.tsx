import React from "react";
import "../styles/Filter.scss";

const Filter: React.FC = () => {
  return (
    <section className="filter">
      <div className="container">
        <div className="filter__main">
          <button className="filter__select-btn filter__select-btn--active">Все</button>
          <button className="filter__select-btn">Завершенные</button>
          <button className="filter__select-btn">Незавершенные</button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
