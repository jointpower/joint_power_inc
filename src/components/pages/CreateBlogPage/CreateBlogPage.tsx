
'use client'
import { useFormik } from "formik";
import * as Yup from 'yup'
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ChangeEvent, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios, { AxiosError } from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { ImSpinner2 } from "react-icons/im";

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

export const ValidationError = ({ text }: { text: string }) => {
  return <span className="text-xs text-red-700 block">{text}</span>;
};

const CreateBlogPage = () => {
  const router = useRouter()
  const [file, setFile] = useState<string | ArrayBuffer>('');
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const saveBlog = (payload: any) => {
    setLoading(true)
    try {
      axios.post('http://localhost/jps-blog-server/server.php', payload, {
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        toast(res.data.message, { type: 'success' })
        router.push('/blog');
        console.log(res)
      })
    } catch (error: any) {
      console.log('hey')
      console.log(error.response.data.error)
      toast(error.error, { type: 'error' })
      toast(error.error, { type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: '',
      author: "",
      date: "",
      content: "",
      category: "",
      image_url: '',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("This field is required"),
      author: Yup.string().required("This field is required"),
      content: Yup.string(),
      category: Yup.string().required("This field is required"),
      image_url: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      // values.content = value;
      console.log(values)
      saveBlog(values)
    },
  });

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files![0];
    let reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setFieldValue('image_url', reader.result);
        setFile(reader.result)
      }
    };

    reader.readAsDataURL(file);
  }

  const { getFieldProps, errors, touched, handleSubmit, setFieldValue } = formik;

  return (
    <div className="text-grey-2 pt-24 ">
      <div className="mt-10 max-w-[1200px] mx-auto pt-10 px-5">
        <h3 className="font-semibold text-2xl sm:text-5xl text-center mb-10">Create a New Blog!</h3>
        <div className="max-w-[600px] m-auto mt-20">
          <form onSubmit={handleSubmit} className="my-8">
            <div className="grid gap-5">
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="title" >Blog Image</label>
                <input
                  name="image_url"
                  type="file"
                  accept="image/*"
                  className="w-full p-3 py-4 border rounded-lg min-w-[unset] sm:!min-w-[370px]"
                  onChange={event => handleFileUpload(event)}
                />
                {touched.image_url && errors.image_url && (
                  <ValidationError text={errors.image_url} />
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
                <input
                  type="text"
                  {...getFieldProps("content")}
                  placeholder="Content"
                  className="w-full p-3 py-4 border rounded-lg min-w-[unset] sm:!min-w-[370px]"
                />
                {/* <ReactQuill theme="snow"
                  value={value}
                  onChange={setValue}
                // {...getFieldProps("content")}
                /> */}

              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <button
                onClick={() => router.back()}
                className=" text-slate-900 bg-slate-100 py-4 p-10 w-fit mt-20 rounded-lg"
              >
                Back
              </button>
              <button
                disabled={loading}
                type="submit"
                className="disabled:bg-opacity-60 flex items-center gap-2 bg-slate-900 text-slate-100 py-4 p-10 w-fit mt-20 rounded-lg"
              >
                {loading ? <span><ImSpinner2 className="animate-spin" size={16} /></span> : null}
                Save Blog
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default CreateBlogPage;