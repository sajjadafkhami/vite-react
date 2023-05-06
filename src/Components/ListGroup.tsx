import React from "react";

//import { MouseEvent } from "react";

const ListGroup: React.FC = () => {
  let items: any = ["Iran", "Jepan", "Brizil", "Indian", "France"];

  // items[0] = 3;
  // items[1] = " he the man ";
  // const handlerclick = (event : mouseevent)  => console.log(event);
  const getMessage = () => {
    //return items.length === 0 && <p>No item Found</p>;
    return items.length === 0 ? <p>No item Found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()};
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            Key={item}
            //{handlerclick()}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListGroup;
