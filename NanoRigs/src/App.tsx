import { Header } from "./components/header";
import { Dropdown } from "./components/products";

function App() {
  return (
    <>
      <Header />

      <Dropdown
        label="Products"
        items={["Product 1", "Product 2", "Product 3"]}
      />
    </>
  );
}

export default App;
