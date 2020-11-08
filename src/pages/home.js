import React, { useEffect, useState } from "react";
import BookService from "../services/book-services";
import Card from "../views/home/card.js";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const handleDeleteBook = async (bookId) => {
    console.log(bookId);
    const newBooks = await BookService.delete(bookId);
    getBooks();
  };

  const getBooks = async () => {
    const books = await BookService.getBooks();
    setBooks(books);
    setIsLoading(false);
  };
  if (isLoading) {
    return (
      <div className="d-flex">
        <h1 className="mx-auto">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="d-flex flex-wrap">
      {books.map((book) => {
        return (
          <Card book={book} key={book.id} handleDeleteBook={handleDeleteBook} />
        );
      })}
    </div>
  );
};

export default HomePage;
