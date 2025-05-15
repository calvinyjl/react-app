import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "London", "Purley", "Crawley", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // Self closing syntax
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

// Export so it can be used somewhere else
export default App;
