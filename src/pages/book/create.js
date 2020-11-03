import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/create.css";
import "../../styles/index.css";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "ชื่อสั้นเกินไป")
    .max(50, "ชื่อยาวเกินไป!")
    .required("กรุณากรอกชื่อ"),
  lastName: Yup.string()
    .min(2, "นามสกุลสั้นเกินไป")
    .max(50, "นามสกุลยาวเกินไป")
    .required("กรุณากรอกนามสกุล"),
  email: Yup.string().email("อีเมลไม่ถูกต้อง").required("กรุณากรอกอีเมล"),
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
        <div className="background-color-grey mx-auto pd-10px max-height-70p width-40p">
          <div className="">
            <h1 className="color-white text-align-center">สมัครสมาชิก</h1>
            <hr className="bd-white-1px" />
            <label htmlFor="firstName" className="color-white mb-10px">
              ชื่อ
            </label>
            <div className="mx-auto">
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                placeholder="กรุณากรอกชื่อ"
                className="pd-10px mb-10px no-bd"
              />
              {formik.touched.firstName && (
                <div className="color-error mb-10px">
                  {formik.errors.firstName}
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="color-white mb-10px">
              นามสกุล
            </label>
            <div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                placeholder="กรุณากรอกนามสกุล"
                className="pd-10px mb-10px no-bd"
              />
              {formik.touched.lastName && (
                <div className="color-error mb-10px">
                  {formik.errors.lastName}
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="color-white mb-10px">
              อีเมล
            </label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                placeholder="กรุณากรอกอีเมล"
                className="pd-10px mb-10px no-bd"
              />
              {formik.touched.email && (
                <div className="color-error mb-10px">{formik.errors.email}</div>
              )}
            </div>
          </div>
          <div>
            <button type="submit">สมัครสมาชิก</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateBook;
