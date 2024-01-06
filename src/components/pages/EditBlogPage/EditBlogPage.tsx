
'use client'
import { useFormik } from "formik";
import * as Yup from 'yup'
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ChangeEvent, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios, { AxiosResponse } from "axios";
import { BlogType } from "../BlogPage/BlogPage";
import { toast } from "react-toastify";

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

export const ValidationError = ({ text }: { text: string }) => {
  return <span className="text-xs text-red-700 block">{text}</span>;
};


const EditBlogPage = () => {

  const [value, setValue] = useState('');
  const [blog, setBlog] = useState({} as BlogType)
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const saveChanges = (payload: any) => {
    setLoading(true)
    try {
      axios.patch('http://localhost/jps-blog-server/server.php?id=' + router.query.blogId, payload, {
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        toast(res.data.message, { type: 'success' })
        router.push('/blog');
        console.log(res)
      })
    } catch (error: any) {
      toast(error.error, { type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files![0];
    let reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        formik.setFieldValue('image_url', reader.result);
      }
    };

    reader.readAsDataURL(file);
  }


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blog?.title,
      author: blog?.author,
      date: blog?.created_date,
      content: blog?.body,
      category: blog?.category,
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("This field is required"),
      author: Yup.string().required("This field is required"),
      content: Yup.string(),
      category: Yup.string().required("This field is required"),
      // image_url: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      values.content = value;
      // @ts-ignore
      values.image_url = blog.image_url;
      console.log(value)
      console.log(values)
      saveChanges(values);
    },
  });

  const { getFieldProps, errors, touched, handleSubmit } = formik;

  useEffect(() => {
    console.log(router.query)
    axios.get('http://localhost/jps-blog-server/server.php?id=' + router.query.blogId).then((res: AxiosResponse) => {
      setBlog(res.data.data);
      setValue(res.data.data.body)
    })
  }, [])

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
                  onChange={event => handleFileUpload(event)}
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
            <div className="flex items-center justify-center gap-5">
              <button
                // showLoadingSpinner
                // loading={isLoading}
                onClick={() => router.back()}
                className=" text-slate-900 bg-slate-100 py-4 p-10 w-fit  mt-20 rounded-lg"
              >
                Back
              </button>
              <button
                // showLoadingSpinner
                // loading={isLoading}
                type="submit"
                className=" bg-slate-900 text-slate-100 py-4 p-10 w-fit  mt-20 rounded-lg"
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