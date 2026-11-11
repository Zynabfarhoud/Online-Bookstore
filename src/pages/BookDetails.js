import "../styles/bdetails.css";
function BookDetails({ book }) {
  return (
    <div className="bookdetails">
      <img src={book.image} alt={book.title} />

      <div>
        <h1>{book.title}</h1>

        <p>
          <strong>Author:</strong> {book.author}
        </p>

        <p>
          <strong>Category:</strong> {book.category}
        </p>

        <p>
          <strong>Price:</strong> ${book.price}
        </p>

        <p>
          <strong>Description:</strong>
        </p>
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default BookDetails;
