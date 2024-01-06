import Banner from "../../molecules/Banner/Banner";

import blog1 from 'public/bank-security.jpg';
import NextImage from "@/components/atom/NextImage/NextImage";
import news from 'public/team-member-1.jpg'
import { ImMail, ImSpinner2 } from "react-icons/im";
import { HiThumbUp } from "react-icons/hi";
import { MdOutlineFacebook } from "react-icons/md";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { BlogType } from "../BlogPage/BlogPage";
import { ToastContainer, toast } from "react-toastify";


const BlogDetailsPage = () => {

  const router = useRouter();
  const [blog, setBlog] = useState({} as BlogType);
  const blurDataURL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7';
  const [loading, setLoading] = useState(false);

  const deleteBlog = () => {
    setLoading(true)
    const payload = {
      id: router.query.blogId,
    }
    try {
      axios.delete('http://localhost/jps-blog-server/server.php/?id=' + payload.id, {
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


  useEffect(() => {
    axios.get('http://localhost/jps-blog-server/server.php?id=' + router.query.blogId).then((res) => {
      setBlog(res.data.data);
      console.log(res);
    })
  }, [])

  return (
    <div className="text-grey-2 pt-24 ">
      <div className="mt-10 max-w-[1200px] mx-auto pt-10 px-5">
        <h3 className="font-semibold text-2xl sm:text-5xl text-center mb-10">{blog?.title}</h3>
        <NextImage
          blurDataURL={blurDataURL}
          src={blog?.image_url} alt="news image" className="w-full sm:w-[500px] h-[400px]" />
        <div className="pt-6 mt-10 flex items-center justify-between border-t">
          <div className="flex items-center gap-6 !text-xs">
            <span>{blog?.created_date}</span>
            |
            <span>POSTED BY: <b>{blog?.author}</b></span>
            |
            <span>CATEGORY: <b>{blog?.category}</b></span>
          </div>
        </div>
        <div className="my-20">
          <div className="" dangerouslySetInnerHTML={{ __html: blog?.body }} ></div>
          <br />  <br />
          <p>
            Read More About. </p>
          <div className="mt-10">
            <span>Please Like, Follow and Share.</span>
          </div>
          <div className="mt5 flex flex-col sm:flex-row gap-10 items-center justify-between">
            <div className="mt-5 flex items-center gap-3">
              <button className="flex items-center gap-1 bg-primary text-white p-2 px-3 text-xs rounded-lg">
                <ImMail /> Follow
              </button>
              <button className="flex items-center gap-1 bg-primary text-white p-2 px-3 text-xs rounded-lg">
                <HiThumbUp size={16} /> Like
              </button>
              <button className="flex items-center gap-1 bg-primary text-white p-2 px-3 text-xs rounded-lg">
                <MdOutlineFacebook size={17} /> Share
              </button>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <button
                disabled={loading}
                onClick={deleteBlog}
                className="disabled:bg-opacity-60 flex items-center gap-1 bg-red-600 text-white p-2 px-3 text-xs rounded-lg">
                {loading ? <ImSpinner2 size={12} className="animate-spin" /> : <FaTrashAlt />}Delete
              </button>
              <button
                onClick={() => router.push('/blog/edit/' + blog.id)}
                className="flex items-center gap-1 bg-primary text-white p-2 px-3 text-xs rounded-lg">
                <FaEdit size={16} /> Edit Blog
              </button>

            </div>

          </div>
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

export default BlogDetailsPage;
