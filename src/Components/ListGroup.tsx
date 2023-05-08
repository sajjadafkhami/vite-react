import React, { useState } from "react";
//import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedItem }: Props) {
  const [selectedIndex, setselectedIndex] = useState(-1);

  // items[0] = 3;
  // items[1] = " he the man ";
  // const handlerclick = (event : mouseevent)  => console.log(event);
  const getMessage = () => {
    return items.length === 0 ? <p>No item Found</p> : null;
    //return items.length === 0 && <p>No item Found</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()};
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            Key={item}
            //onclick={handlerclick()}
            onClick={() => {
              setselectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
