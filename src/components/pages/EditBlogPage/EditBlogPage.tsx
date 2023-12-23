
'use client'
import { useFormik } from "formik";
import * as Yup from 'yup'
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

export const ValidationError = ({ text }: { text: string }) => {
  return <span className="text-xs text-red-700 block">{text}</span>;
};


const EditBlogPage = () => {

  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: '',
      author: "",
      date: "",
      content: "",
      category: "",
      image: ''
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("This field is required"),
      author: Yup.string().required("This field is required"),
      content: Yup.string(),
      category: Yup.string().required("This field is required"),
      image: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      values.content = value;
      console.log('whats')
      console.log(value)
      console.log(values)
    },
  });

  const { getFieldProps, errors, touched, handleSubmit } = formik;

  return (
    <div className="text-grey-2 pt-24 ">
      <div className="mt-10 max-w-[1200px] mx-auto pt-10 px-5">
        <h3 className="font-semibold text-2xl sm:text-5xl text-center mb-10">Edit Blog!</h3>
        <div className="max-w-[600px] m-auto mt-20">
          <form onSubmit={handleSubmit} className="my-8">
            <div className="grid gap-5">
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="title" >Blog Image</label>
                <input
                  type="file"
                  placeholder="Enter Blog Title"
                  className="w-full p-3 py-4 border rounded-lg min-w-[unset] sm:!min-w-[370px]"
                  {...getFieldProps("image")}
                />
                {touched.title && errors.title && (
                  <ValidationError text={errors.title} />
                )}
              </div>
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="title" >Title</label>
                <input
                  type="text"
                  placeholder="Enter Blog Title"
                  className="w-full p-3 py-4 border rounded-lg min-w-[unset] sm:!min-w-[370px]"
                  {...getFieldProps("title")}
                />
                {touched.title && errors.title && (
                  <ValidationError text={errors.title} />
                )}
              </div>
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="author" >Author</label>
                <input
                  type="text"
                  placeholder="Author's name"
                  className="w-full p-3 py-4 border rounded-lg min-w-[unset] sm:!min-w-[370px]"
                  {...getFieldProps("author")}
                />
                {touched.author && errors.author && (
                  <ValidationError text={errors.author} />
                )}
              </div>
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="category" >Category</label>
                <input
                  type="text"
                  placeholder="Enter Category"
                  className="w-full p-3 py-4 border rounded-lg min-w-[unset] sm:!min-w-[370px]"
                  {...getFieldProps("category")}
                />
                {touched.category && errors.category && (
                  <ValidationError text={errors.category} />
                )}
              </div>
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="cotent" >Content</label>
                {/* <input
                  type="text"

                  placeholder="Confirm your password"
                  className="w-full p-3 py-4 border rounded-lg min-w-[unset] sm:!min-w-[370px]"
                /> */}
                <ReactQuill theme="snow"
                  value={value}
                  onChange={setValue}
                // {...getFieldProps("content")}
                />

              </div>
            </div>
            <div className="flex">
              <button
                // showLoadingSpinner
                // loading={isLoading}
                type="submit"
                className=" bg-slate-900 text-slate-100 py-4 p-10 w-fit m-auto mt-20 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlogPage;