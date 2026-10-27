// ProductList will be responsible for the list.
// ProductCard will be responsible for displaying one product.

// This line brings the array from data.json into our ProductList component.
//React doesn't automatically know about components from other files. We import it so ProductList can use it.

import products from "./data.json";
import ProductCard from "./ProductCard";

// A React component is simply a JavaScript function that returns JSX.
// ProductList will -> 1.Receive/access all products. 2.Use .map() to go through them. 3.Create a ProductCard for each product. 4.Return all those cards.

function ProductList({ onAddToCart }) {
    return (
        <div className="product-list">
            {products.map(product => (
                //Create a ProductCard and give it the current product.
                //product = "prop name"
                //{product} = "actual JavaScript variable"
                //key={product.name} Used by React internally to identify each list item.
                <ProductCard 
                    key={product.name} 
                    product={product} 
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}

export default ProductList;