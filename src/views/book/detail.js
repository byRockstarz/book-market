import BackButton from "../../components/buttons/back";
import { Link } from "react-router-dom";
import "../../styles/bookdetail.css";
import "../../styles/index.css";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const BookDetail = ({ book, handleRatingChange }) => {
  return (
    <div className="d-flex">
      <div className="mx-auto border-card-book mt-20px size-book-cover box-shadow size-book-cover">
        <div className="grid-container">
          <div className="grid-item">
            <img
              className="box-shadow width-100per"
              src={book1.imageUrl}
              alt="bookimage"
            />
          </div>
          <h3 className="grid-item text-align-center mt-20px">
            {book1.title}{" "}
            <Rating
              initialRating={book1.rating}
              onChange={handleRatingChange}
              className="width-100per text-align-center mt-15px"
              emptySymbol={<AiOutlineStar color="gold" size="20px" />}
              fullSymbol={<AiFillStar color="gold" size="20px" />}
            />
          </h3>
        </div>
        <div className="d-flex">
          <div className="mx-auto">
            <Link to="/" className="text-decoration-none">
              <BackButton className="back-button">กลับหน้าหลัก</BackButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
