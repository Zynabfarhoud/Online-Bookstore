import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const removeBook = (id) => {
    setCart(cart.filter((book) => book.id !== id));
  };

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }

  return (
    <div className="cart">
      <h1>My Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((book, index) => (
            <div className="cart-item" key={index}>
              <img src={book.image} alt={book.title} />

              <h3>{book.title}</h3>

              <p>${book.price}</p>

              <button onClick={() => removeBook(book.id)}>Remove</button>
            </div>
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;
