// import { Fragment } from "react";
// import type { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook: has data or state which changes over time
  // Re-renders component when the updater function is called
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0] variable (selectedIndex)
  //   arr[1] updater function

  const getMessage = () => {
    // return items.length == 0 ? <p>No items found</p> : null;

    // Better implementation without null
    // If condition is true the expression is the paragraph element
    // If condition is false, the expression is false and nothing renders
    return items.length === 0 && <p>No items found</p>;
  };

  // Event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  // Fragment doesn't add an element unlike div
  // Empty elements are a Fragment in React
  return (
    <>
      <h1>{heading}</h1>
      {getMessage}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}

        {/* <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default ListGroup;
