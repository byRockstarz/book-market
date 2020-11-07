import "../../styles/index.css";
import "../../styles/card.css";

const Card = ({ book }) => {
  return (
    <div className="border-card box-shadow ">
      <div className="d-flex">
        <div className="mx-auto">
          <img
            src={book.imageUrl}
            alt="profile"
            className="width-height-150px"
          />
        </div>
      </div>
      <h2 className="text-align-center height-60px">{book.title}</h2>
      <h4 className="text-align-center"> จำนวนสินค้าคงเหลือ : {book.stock}</h4>
      <div className="d-flex">
        <div className="mx-auto ">
          <button className="border-button">Edit</button>
          <button className="border-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
