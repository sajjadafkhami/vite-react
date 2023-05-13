import Alert from "./Components/Alert";
import { Children, useState } from "react";
import Button from "./Components/Button";

//import ListGroup from "./Components/ListGroup";

function App() {
  const [alertvisible, setalertvisibility] = useState(false);

  //let countries = ["Iran", "Jepan", "Brizil", "Indian", "France"];

  // const handelSelectedItem = (item: string) => {
  //   console.log(item);
  // };

  //const name = "sajjad";
  // if (name) return <h1>Hello World {name}</h1>;

  // return <h1>Listgroup</h1>;

  return (
    <div>
      {alertvisible && (
        <Alert onclose={() => setalertvisibility(false)}>my Alert</Alert>
      )}
      <Button color="secondary" onclick={() => setalertvisibility(true)}>
        my Button
      </Button>
    </div>
  );
}
export default App;
/*

<ListGroup />
    items={countries}
    heading={"cities"}
    onSelectedItem={handelSelectedItem}
    onSelectedItem={(item: string) => {
          console.log(`item is ${item}`);
        }}
        */

/*
        <Alert>
        Hello <span>World</span>
      </Alert>

      */
