import { useState, useContext } from "react";
import books from "./Books";
import BookDetails from "./BookDetails";
import { CartContext } from "../context/CartContext";
import "../styles/shop.css";
import "../styles/searchbar.css";
import "../styles/books.css";

function Shop() {
  const [category, setCategory] = useState("All Books");
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const { cart, setCart } = useContext(CartContext);

  const categories = ["All Books", "Romance", "Horror", "Mystery", "Fantasy"];

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      category === "All Books" || book.category === category;

    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const addToCart = (book) => {
    setCart([...cart, book]);
    alert("Book added to cart!");
  };

  return (
    <div className="shop">
      {selectedBook ? (
        <>
          <button onClick={() => setSelectedBook(null)}>Back to Shop</button>

          <BookDetails book={selectedBook} />
        </>
      ) : (
        <>
          <h1>Our Book Collection</h1>

          <input
            type="text"
            placeholder="Search by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchbar"
          />

          <div className="categories">
            {categories.map((item) => (
              <button key={item} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>

          <div className="bookscontainer">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div className="bookcard" key={book.id}>
                  <img src={book.image} alt={book.title} />

                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <p>${book.price}</p>

                  <button
                    onClick={() => setSelectedBook(book)}
                    className="btn1"
                  >
                    View More
                  </button>

                  <button onClick={() => addToCart(book)} className="btn1">
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p>No books found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Shop;
