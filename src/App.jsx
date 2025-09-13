import ProductCard from "./ProductCard.jsx"
function App() {
  const productName="Motog34"
  const price=15000
  const isAvailable=true
  
  return (
    <>
       <ProductCard productName={productName} price={price} isAvailable={isAvailable}/> 
    </>
  )
}


export default App
