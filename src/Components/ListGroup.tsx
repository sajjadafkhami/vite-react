function ListGroup() {
  const items = ["Iran", "Jepan", "Brizil", "Indian", "France"];
  return (
    <>
      <h1>ListGroup</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li Key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
