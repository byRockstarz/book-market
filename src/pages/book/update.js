import UpdateBook from "../../views/book/update";

const { useState, useEffect } = require("react");
const { useParams } = require("react-router-dom");
const { default: BookService } = require("../../services/book-services");

const UpdateBookPage = () => {
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
  return <UpdateBook book={book} />;
};

export default UpdateBookPage;
