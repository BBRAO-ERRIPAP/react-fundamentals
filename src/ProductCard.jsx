function ProductCard({productName,price,isAvailable}){
    
    return (
        <div>
            <p>Product name:{productName}</p>
            <p>Price:{price}</p>
            <p>{isAvailable===true?"In stock":"Out of Stock"}</p>
        </div>
        
    )
}
export default ProductCard