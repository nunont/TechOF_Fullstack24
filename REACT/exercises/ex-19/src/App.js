import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    {
      name: "Product 1",
      description: "Description of product 1",
      price: "$10.99",
    },
    {
      name: "Product 2",
      description: "Description of product 2",
      price: "$24.99",
    },
    {
      name: "Product 3",
      description: "Description of product 3",
      price: "$15.49",
    },
  ];

  const ProductContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  }
  
  return (
    <>
      <div>
        {products.map((product, index) => (
          <div key={index} style={ProductContainer}>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{product.name}</div>
            <div>{product.description}</div>
            <div style={{ color : 'red' }}>{product.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
