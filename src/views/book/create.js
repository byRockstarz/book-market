import { useState } from "react";
import { useHistory } from "react-router-dom";
import { path } from "../../routes/constant";
import BookService from "../../services/book-services";
import "../../styles/index.css";
import BookForm from "./form";

const Create = () => {
  const [isLoading, setIsloading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (values) => {
    setIsloading(true);
    try {
      const response = await BookService.create(values);
      console.log(response);
      alert("สร้างหนังสือสำเร็จ");
      history.push(path.home);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setIsloading(false);
  };

  return (
    <BookForm
      book={{}}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      title={"สร้างหนังสือใหม่"}
    />
  );
};
export default Create;
