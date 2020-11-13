import { useState } from "react";
import BookService from "../../services/book-services";
import "../../styles/index.css";
import BookForm from "./form";
import { useHistory } from "react-router-dom";
import { path } from "../../routes/constant";

const UpdateBook = ({ book }) => {
  const [isLoading, setIsloading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (values) => {
    setIsloading(true);
    try {
      const response = await BookService.updateBookDetail(book.id, values);

      alert("อัพเดทข้อมูลหนังสือแล้ว");
      history.push(path.home);
    } catch (error) {
      alert(error.message);
    }
    setIsloading(false);
  };

  return (
    <BookForm
      book={book}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      title={"อัพเดทข้อมูลหนังสือ"}
    />
  );
};
export default UpdateBook;
