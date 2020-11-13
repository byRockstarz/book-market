import { useFormik } from "formik";
import * as Yup from "yup";
import { FaBook } from "react-icons/fa";
import "../../styles/index.css";
import { Link } from "react-router-dom";

const BookSchema = Yup.object().shape({
  title: Yup.string().required("กรอกชื่อหนังสือ"),
  description: Yup.string().required("โปรดใส่รายละเอียด"),
  price: Yup.number().required("กรุณาใส่ราคา"),
  stock: Yup.number().required("กรอกจำนวน"),
  imageUrl: Yup.string().required("กรอกลิงก์รูปภาพ"),
});

const BookForm = ({ title, book, handleSubmit, isLoading }) => {
  const formik = useFormik({
    initialValues: {
      title: book.title || "",
      description: book.description || "",
      price: book.price || "",
      stock: book.stock || "",
      imageUrl: book.imageUrl || "",
    },

    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: BookSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="d-flex">
        <div className="mx-auto width-400px background-color-grey pd-20px">
          <di>
            <FaBook className="width-100per" />
          </di>
          <h1 className="text-align-center width-100per">{title}</h1>

          <label htmlFor="title">ชื่อหนังสือ</label>

          <div className="mt-10px height-80px">
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
              placeholder="ชื่อหนังสือ"
              className="width-100per border-box pt-pb-pl-10px"
            />
            {formik.touched.title && (
              <div className="mg-10px color-red">{formik.errors.title}</div>
            )}
          </div>

          <label htmlFor="description" className="">
            รายละเอียด
          </label>
          <div className="mt-10px height-80px">
            <input
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
              onBlur={formik.handleBlur}
              placeholder="รายละเอียดหนังสือ"
              className="width-100per border-box pt-pb-pl-10px"
            />
            {formik.touched.description && (
              <div className="mg-10px color-red">
                {formik.errors.description}
              </div>
            )}
          </div>

          <label htmlFor="price" className="">
            ราคา
          </label>
          <div className="mt-10px height-80px">
            <input
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.price}
              onBlur={formik.handleBlur}
              placeholder="ราคา"
              className="width-100per border-box pt-pb-pl-10px"
            />
            {formik.touched.price && (
              <div className="mg-10px color-red">{formik.errors.price}</div>
            )}
          </div>

          <label htmlFor="stock" className="">
            จำนวนสินค้า
          </label>
          <div className="mt-10px height-80px">
            <div>
              <input
                id="stock"
                name="stock"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.stock}
                onBlur={formik.handleBlur}
                placeholder="จำนวนสินค้าคงเหลือ"
                className="width-100per border-box pt-pb-pl-10px"
              />
            </div>
            {formik.touched.stock && (
              <div className="mg-10px color-red">{formik.errors.stock}</div>
            )}
          </div>

          <label htmlFor="imageUrl" className="">
            รูปภาพ
          </label>
          <div className="mt-10px height-80px">
            <input
              id="imageUrl"
              name="imageUrl"
              type="string"
              onChange={formik.handleChange}
              value={formik.values.imageUrl}
              onBlur={formik.handleBlur}
              placeholder="รูปภาพ"
              className="width-100per border-box pt-pb-pl-10px"
            />

            {formik.touched.imageUrl && (
              <div className="mg-10px color-red">{formik.errors.imageUrl}</div>
            )}
          </div>
          <div className="d-flex">
            <button
              className="mx-auto pd-10px"
              type="submit"
              disabled={isLoading}
            >
              <div className="d-flex align-item-center">
                {isLoading && <div className="loader"></div>}
                ยืนยัน
              </div>
            </button>
            <Link className="mx-auto" to="/">
              <button className=" pd-10px">ยกเลิก</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookForm;
