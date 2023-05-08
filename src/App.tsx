import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["Iran", "Jepan", "Brizil", "Indian", "France"];
  const handelSelectedItem = (item: string) => {
    console.log(item);
  };

  //const name = "sajjad";
  // if (name) return <h1>Hello World {name}</h1>;

  // return <h1>Listgroup</h1>;
  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectedItem={handelSelectedItem}
      />
    </div>
  );
}
export default App;
