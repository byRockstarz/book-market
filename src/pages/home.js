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

  const handleUpdateRating = async (bookId, rating) => {
    try {
      const book = await BookService.updateRating(bookId, rating);
      const bookIndex = books.findIndex((book) => book.id === bookId);
      if (bookIndex !== -1) {
        const newBooks = [...books];
        newBooks[bookIndex].rating = book.rating;
        setBooks(newBooks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex">
        <h1 className="mx-auto">Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="width-100per text-align-center">
        ร้านขายหนังสือออนไลน์ที่ใหญ่ที่สุด
      </h1>
      <div className="d-flex flex-wrap">
        {books.map((book) => {
          return (
            <Card
              handleUpdateRating={handleUpdateRating}
              book={book}
              key={book.id}
              handleDeleteBook={handleDeleteBook}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
