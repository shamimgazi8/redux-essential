"use client";
import { useCreatePostMutation } from "@/app/lib/postsSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { MdOutlinePostAdd } from "react-icons/md";
import { object, string } from "yup";
import "../src/ExpenseForm.css";
import { Spinner } from "./Spinner";
const AddNewPost = () => {
  let validation = object({
    title: string()
      .required("Title is a Required field")
      .min(5, "Must be at least 5 characters long"),
    Content: string().required().min(30, "Must be at least 30 characters long"),
  });

  const [createpost, { isLoading }] = useCreatePostMutation();

  if (isLoading) {
    return <Spinner />;
  }

  const submitForm = (values: any) => {
    console.log(values);
    const title = values.title;
    const body = values.Content;

    createpost({ title, body });
    values.title = "";
    values.Content = "";
    values.Author = "";
  };

  return (
    <section>
      <div className=" px-5 py-5 ">
        <h1 className=" text-3xl font-bold text-blue-950 mb-5">
          Add a New Post
        </h1>

        <Formik
          validationSchema={validation}
          initialValues={{
            title: "",
            Content: "",
            author: "",
          }}
          onSubmit={submitForm}
          // validate={(values) => {
          //   let errors = {};
          //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          //   if (!values.title) {
          //     errors.title = "Cannot be blank";
          //   } else if (values.title.length < 5) {
          //     errors.title = "*Too short Post Tilte";
          //   }
          //   if (!values.Content) {
          //     errors.Content = "Can't be Blank";
          //   } else if (values.Content.length < 30) {
          //     errors.Content = "*Too short Content minimum letter 30";
          //   }
          //   return errors;
          // }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <label htmlFor="title" className=" text-xl font-semibold  ">
                Post Title :
              </label>

              <Field
                onChange={(e: any) => {
                  setFieldValue("title", e.target.value);
                }}
                value={values.title}
                type="text"
                name="title"
                placeholder="Whats on your mind?"
              />
              <ErrorMessage
                className=" text-danger font-semibold mb-2"
                name="title"
                component="div"
              />
              {/* <select
                name=""
                id=""
                onChange={(e) => {
                  setFieldValue("catagories", e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option value="dog">dog</option>
                <option value="cat">cat</option>
                <option
                  selected={values.catagories === "bird" ? true : false}
                  value="bird"
                >
                  bird
                </option>
              </select> */}
              <label htmlFor="author" className=" text-xl font-semibold  ">
                Author :
              </label>
              <Field type="text" name="Author" />
              <label htmlFor="content" className=" text-xl font-semibold  ">
                Content :
              </label>
              <Field
                type="text"
                value={values.Content}
                name="Content"
                autocomplete="off"
              />
              <ErrorMessage
                className=" text-danger font-semibold mb-2"
                name="Content"
                component="div"
              />
              <button
                disabled={
                  values.Content.length < 30 || values.title.length < 5
                    ? true
                    : false
                }
                type="submit"
                onClick={() => submitForm}
                className="flex justify-center items-center gap-3 h-[40px] w-[150px] bg-purple-600 text-white rounded hover:bg-secondary duration-300 mt-5"
              >
                <MdOutlinePostAdd />
                Share
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
export default AddNewPost;
