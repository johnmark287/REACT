import React, { useState } from "react";
import Numbers from "../pages/Numbers";
import "./paginator.css";
import range from "../utils/helpers";
export const Paginator = ({
  totalCount,
  page,
  pageSize,
  onNext,
  onPrev,
  onPageSelected,
}) => {
  const getPagesCount = Math.ceil(totalCount / pageSize);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button>Previous</button>
      {range(getPagesCount).map((element) => (
        <button
          style={{ backgroundColor: page === element ? "blue" : "" }}
          onClick={() => onPageSelected(element)}
        >
          {element}
        </button>
      ))}
      <button>Next</button>
    </div>
  );
};
