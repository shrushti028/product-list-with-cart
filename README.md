# Product List with Cart

A responsive dessert shopping interface built with React. Users can browse a list of desserts, add products to their cart, adjust quantities, view the order total, and review their order before confirmation.

## Features

- Display dessert products with images, names, categories, and prices.
- Add products to the shopping cart.
- Increase or decrease product quantities.
- Calculate item subtotals and the total order price.
- Display an empty-cart message when no products are selected.
- Show an order confirmation interface.
- Responsive layout for different screen sizes.

## Tech Stack

- **React** — component-based user interface and state management.
- **JavaScript (ES6+)** — cart logic and price calculations.
- **CSS3** — styling and responsive layouts.
- **Vite** — development server and build tooling.
- **JSON** — local product data.

## Project Structure

```text
product-list-with-cart/
├── public/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── App.jsx
│   ├── App.css
│   ├── Cart.jsx
│   ├── OrderConfirmation.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── data.json
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shrushti028/product-list-with-cart.git
   ```

2. Navigate to the project directory:

   ```bash
   cd product-list-with-cart
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## What I Learned

- Building reusable React components.
- Passing data between components using props.
- Managing cart data using React state.
- Handling user interactions with event handlers.
- Using JavaScript array methods to update cart items and calculate totals.
- Organizing product data separately from UI components.
- Building and styling a responsive interface.

## Future Improvements

- Add persistent cart storage.
- Improve accessibility and keyboard navigation.
- Deploy the application for live access.

## Author

**Shrushti**

[GitHub Repository](https://github.com/shrushti028/product-list-with-cart)
