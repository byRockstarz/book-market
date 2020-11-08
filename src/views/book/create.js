import { Formik, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { FaBook } from "react-icons/fa";
import BookService from "../../services/book-services";

const SignupSchema = Yup.object().shape({
  title: Yup.string().required("กรอกชื่อหนังสือ"),
  description: Yup.string().required("โปรดใส่รายละเอียด"),
  price: Yup.number().required("กรุณาใส่ราคา"),
  stock: Yup.number().required("กรอกจำนวน"),
  imageUrl: Yup.string().required("กรอกลิงก์รูปภาพ"),
});

const Create = () => {
  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = async (values) => {
    setIsloading(true);
    try {
      const response = await BookService.create(values);
      console.log(response);
      alert("สร้างหนังสือสำเร็จ");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setIsloading(false);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      stock: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <form onSubmit={Formik.handleSubmit}>
      <div className="d-flex">
        <div className="mx-auto mt-20px pd-20px background-color-grey radius-20px width-400px">
          <div className="d-flex mr-20px">
            <FaBook color="white" size="50" />
            <h1 className="text-align-center color-white">สร้างหนังสือใหม่</h1>
          </div>

          <div className="mb-20px">
            <label htmlFor="title">ชื่อหนังสือ</label>

            <div className="mt-10px">
              <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
                onBlur={formik.handleBlur}
                placeholder="ชื่อหนังสือ"
                className="width-100per no-bd pt-pb-pl-10px"
              />
              {formik.touched.title && (
                <div className="mg-10px color-red">{formik.errors.title}</div>
              )}
            </div>
          </div>

          <div className="mb-20px">
            <label htmlFor="description" className="">
              รายละเอียด
            </label>
            <div className="mt-10px">
              <input
                id="description"
                name="description"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.description}
                onBlur={formik.handleBlur}
                placeholder="รายละเอียดหนังสือ"
                className="width-100per no-bd pt-pb-pl-10px"
              />
              {formik.touched.description && (
                <div className="mg-10px color-red">
                  {formik.errors.description}
                </div>
              )}
            </div>
          </div>

          <div className="mb-20px">
            <label htmlFor="price" className="">
              ราคา
            </label>
            <div className="mt-10px">
              <input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price}
                onBlur={formik.handleBlur}
                placeholder="ราคา"
                className="width-100per no-bd pt-pb-pl-10px"
              />
              {formik.touched.price && (
                <div className="mg-10px color-red">{formik.errors.price}</div>
              )}
            </div>
          </div>

          <div className="mb-20px">
            <label htmlFor="stock" className="">
              จำนวนสินค้า
            </label>
            <div className="mt-10px">
              <div>
                <input
                  id="stock"
                  name="stock"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.stock}
                  onBlur={formik.handleBlur}
                  placeholder="จำนวนสินค้าคงเหลือ"
                  className="width-100per no-bd pt-pb-pl-10px"
                />
              </div>
              {formik.touched.stock && (
                <div className="mg-10px color-red">{formik.errors.stock}</div>
              )}
            </div>
          </div>

          <div className="mb-20px">
            <label htmlFor="imageUrl" className="">
              รูปภาพ
            </label>
            <div className="mt-10px">
              <div>
                <input
                  id="imageUrl"
                  name="imageUrl"
                  type="string"
                  onChange={formik.handleChange}
                  value={formik.values.imageUrl}
                  onBlur={formik.handleBlur}
                  placeholder="รูปภาพ"
                  className="width-100per no-bd pt-pb-pl-10px"
                />
              </div>
              {formik.touched.imageUrl && (
                <div className="mg-10px color-red">
                  {formik.errors.imageUrl}
                </div>
              )}
            </div>
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
          </div>
        </div>
      </div>
    </form>
  );
};

export default Create;
