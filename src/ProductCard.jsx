// ProductCard will be responsible for displaying one product

//props is simply an object containing the information sent by the parent component.
// So props will contain something like:

// props = {
//     product: {
//         name: "Waffle with Berries",
//         category: "Waffle",
//         price: 6.5
//     }
// }
//{product} is nothing but props

import waffleDesktop from "./assets/images/image-waffle-desktop.jpg";
import cremeBruleeDesktop from "./assets/images/image-creme-brulee-desktop.jpg";
import macaronDesktop from "./assets/images/image-macaron-desktop.jpg";
import tiramisuDesktop from "./assets/images/image-tiramisu-desktop.jpg";
import baklavaDesktop from "./assets/images/image-baklava-desktop.jpg";
import meringueDesktop from "./assets/images/image-meringue-desktop.jpg";
import cakeDesktop from "./assets/images/image-cake-desktop.jpg";
import brownieDesktop from "./assets/images/image-brownie-desktop.jpg";
import pannaCottaDesktop from "./assets/images/image-panna-cotta-desktop.jpg";

const imageMap = {
    "Waffle with Berries": waffleDesktop,
    "Vanilla Bean Crème Brûlée": cremeBruleeDesktop,
    "Macaron Mix of Five": macaronDesktop,
    "Classic Tiramisu": tiramisuDesktop,
    "Pistachio Baklava": baklavaDesktop,
    "Lemon Meringue Pie": meringueDesktop,
    "Red Velvet Cake": cakeDesktop,
    "Salted Caramel Brownie": brownieDesktop,
    "Vanilla Panna Cotta": pannaCottaDesktop
};


function ProductCard({ product, onAddToCart }) {
    return (
        <div className="product-card">
            <img src={imageMap[product.name]} alt={product.name} />

            <div className="product-information">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price}</p>
                <button 
                    className="add-to-cart-btn"
                    onClick={() => onAddToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
            
        </div>
    );
}

export default ProductCard;