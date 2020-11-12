import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookService from "../../services/book-services";
import BookDetail from "../../views/book/detail";

const DetailPage = () => {
  const param = useParams();
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBookById();
  }, []);

  const getBookById = async () => {
    const book = await BookService.getBookById(param.bookId);
    setBook(book);
    setIsLoading(false);
  };
  if (isLoading) {
    return (
      <div className="d-flex">
        <div className="mx-auto mt-200px">
          <div className="loader-home"></div>
          <h1>Loading ...</h1>
        </div>
      </div>
    );
  }
  return <BookDetail book={book} />;
};

export default DetailPage;
