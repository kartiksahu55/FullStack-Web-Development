import React from "react";

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, i) => {
        return (
          <li key={i} style={{ listStyle: "none" }}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
