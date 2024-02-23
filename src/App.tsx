import { Home } from "./pages/Home";

const products = [
  { name: "Apples", price: "1000", imageURL: "", onclick: () => {} },
];
function App() {
  return (
    <>
      <div>
        <Home products={products} />
      </div>
    </>
  );
}

export default App;
