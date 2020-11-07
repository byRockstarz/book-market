import React, { useEffect, useState } from "react";
import BookService from "../services/book-services";
import Card from "../views/home/card.js";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const books = await BookService.getBooks();
    setBooks(books);
    setIsLoading(false);
  };
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="d-flex">
      {books.map((book) => {
        return <Card book={book} key={book.id} />;
      })}
    </div>
  );
};

export default Home;
