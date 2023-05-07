import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["Iran", "Jepan", "Brizil", "Indian", "France"];

  //const name = "sajjad";
  // if (name) return <h1>Hello World {name}</h1>;

  // return <h1>Listgroup</h1>;
  return (
    <div>
      <ListGroup items={items} heading="cities" />
    </div>
  );
}
export default App;
