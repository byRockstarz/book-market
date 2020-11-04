import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/create.css";
import "../../styles/index.css";

const SignupSchema = Yup.object().shape({
  bookName: Yup.string().required("กรอกชื่อหนังสือ"),
  detailBook: Yup.string().required(""),
  priceBook: Yup.string().required(""),
});

const CreateBook = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="d-flex">
        <div className="mx-auto mt-20px pd-20px background-color-grey radius-20px width-400px">
          <h1 className="text-align-center color-white">สร้างหนังสือใหม่</h1>
          <div className="mb-20px">
            <label htmlFor="bookName">ชื่อหนังสือ</label>

            <div className="mt-10px">
              <input
                id="bookName"
                name="bookName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.bookName}
                onBlur={formik.handleBlur}
                placeholder="กรุณากรอกชื่อหนังสือ"
                className="width-100per no-bd pt-pb-pl-10px"
              />
              {formik.touched.bookName && (
                <div className="mg-10px color-red">
                  {formik.errors.bookName}
                </div>
              )}
            </div>
          </div>

          <div className="mb-20px">
            <label htmlFor="detailBook" className="">
              นามสกุล
            </label>
            <div className="mt-10px">
              <input
                id="detailBook"
                name="detailBook"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.detailBook}
                onBlur={formik.handleBlur}
                placeholder="กรุณากรอกนามสกุล"
                className="width-100per no-bd pt-pb-pl-10px"
              />
              {formik.touched.detailBook && (
                <div className="color-error mb-10px">
                  {formik.errors.detailBook}
                </div>
              )}
            </div>
          </div>

          <div className="mb-20px">
            <label htmlFor="email" className="">
              อีเมล
            </label>
            <div className="mt-10px">
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                placeholder="กรุณากรอกอีเมล"
                className="width-100per no-bd pt-pb-pl-10px"
              />
              {formik.touched.email && (
                <div className="color-error mb-10px">{formik.errors.email}</div>
              )}
            </div>
          </div>

          <div className="mb-20px">
            <label htmlFor="email" className="">
              อีเมล
            </label>
            <div className="mt-10px">
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  placeholder="กรุณากรอกอีเมล"
                  className="width-100per no-bd pt-pb-pl-10px"
                />
              </div>
              {formik.touched.email && (
                <div className="color-error mb-10px">{formik.errors.email}</div>
              )}
            </div>
          </div>
          <div>
            <div className="d-flex">
              <button className="mx-auto" type="submit">
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateBook;
