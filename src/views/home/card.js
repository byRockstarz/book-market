import "../../styles/index.css";
import "../../styles/card.css";
import "../../components/buttons/detail.css";
import { path } from "../../routes/constant";
import { NavLink } from "react-router-dom";
import EditButton from "../../components/buttons/edit.js";
import DeleteButton from "../../components/buttons/delete.js";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Card = ({ book, handleDeleteBook, handleUpdateRating }) => {
  const handleDelete = () => {
    const isConfirm = window.confirm("คุณต้องการลบหนังสือเล่มนี้ใช่หรือไม่");
    if (isConfirm) {
      handleDeleteBook(book.id);
    }
  };

  const handleRatingChange = (rating) => {
    handleUpdateRating(book.id, rating);
  };

  return (
    <div className="border-card box-shadow width-250px">
      <div className="d-flex">
        <div className="mx-auto">
          <img
            src={book.imageUrl}
            alt="profile"
            className="width-height-150px"
          />
        </div>
      </div>
      <h2 className="text-align-center height-70px text-radius-in-card">
        {book.title}
      </h2>
      <a className="description-radius-in-card text-align-center">
        {book.description}
      </a>
      <Rating
        initialRating={book.rating}
        onChange={handleRatingChange}
        className="width-100per text-align-center mt-15px"
        emptySymbol={<AiOutlineStar color="gold" size="20px" />}
        fullSymbol={<AiFillStar color="gold" size="20px" />}
      />
      <h4 className="text-align-center"> จำนวนสินค้าคงเหลือ : {book.stock}</h4>
      <div className="d-flex flex-wrap">
        <hr className="border-hr"></hr>
        <div className="width-100per text-align-center">
          <NavLink
            to={`${path.detailBook}/${book.id}`}
            className="detail-button"
          >
            Detail
          </NavLink>
        </div>

        <hr className="border-hr"></hr>
        <div className="width-100per text-align-center">
          <EditButton>Edit</EditButton>
        </div>
        <hr className="border-hr"></hr>
        <div className="width-100per text-align-center">
          <DeleteButton
            className="border-button width-100per mb-10px"
            onClick={handleDelete}
          >
            Delete
          </DeleteButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
