import ProductList from "./ProductList";
import Cart from "./Cart";
import { useState } from "react";
import OrderConfirmation from "./OrderConfirmation";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleConfirmOrder = () => {
    setIsOrderConfirmed(true);
  };

  const handleStartNewOrder = () => {
    setIsOrderConfirmed(false);
    setCartItems([]);
  };

  function handleAddToCart(product) {
    const existingItem = cartItems.find(
      item => item.name === product.name
    );

    if(existingItem) {
      const updatedCart = cartItems.map(item => {
        if(item.name === product.name) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        } else {
          return item;
        }
      });

      setCartItems(updatedCart);
    }
    else {
      setCartItems ([
            ...cartItems,
            {...product, quantity: 1 }
      ]);
    }
  }

  //Quantity control code
  function increaseQuantity(productName) {
    const updatedCart = cartItems.map(item => {
      if(item.name === productName) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      } else {
        return item;
      }
    });
    setCartItems(updatedCart);
  }

  function decreaseQuantity(productName) {
    const updatedCart = cartItems.map(item => {
      if(item.name === productName) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      } else {
        return item;
      }
    })
    .filter(item => item.quantity > 0);
    
    setCartItems(updatedCart);
  }


  const removeItem = (ProductName) => {
    setCartItems(cartItems.filter(item => item.name !== ProductName));
  };


  return (
    //<>...</>? This is called a Fragment. It lets us return both without adding an unnecessary <div> to the HTML.
    <div className="app-container"> 
      <h1>Desserts</h1>

      <div className="main-content">
          <ProductList  onAddToCart={handleAddToCart} />
          {/* It will import code from Cart.jsx */}
          <Cart 
            cartItems={cartItems}
            onIncreaseQuantity={increaseQuantity}
            onDecreaseQuantity={decreaseQuantity}
            onRemoveItem={removeItem}
            onConfirmOrder={handleConfirmOrder}
          />
      </div>

      <OrderConfirmation 
          cartItems={cartItems}
          isOpen={isOrderConfirmed}
          onStartNewOrder={handleStartNewOrder}
      />
      
    </div>
  );
}

export default App