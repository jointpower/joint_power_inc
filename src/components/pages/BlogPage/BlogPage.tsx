import Banner from "../../molecules/Banner/Banner";

import blog1 from 'public/bank-security.jpg';
import NextImage from "@/components/atom/NextImage/NextImage";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsPlus } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export type BlogType = {
  id: string,
  title: string,
  body: string,
  author: string,
  category: string,
  created_date: string,
  image_url: string,
}

const BlogPage = () => {

  const router = useRouter();
  const [blogs, setBlogs] = useState([] as Array<BlogType>);
  const randomLink = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7';

  useEffect(() => {
    axios.get('http://localhost/jps-blog-server/server.php').then(res => {
      setBlogs(res.data.data)
      console.log(res.data)
    })
  }, [])


  return (
    <div className="text-grey-2 pt-24 blog">
      {/* @ts-ignore */}
      <Banner text={"Blog"} />
      <div className="max-w-[1200px] mx-auto">
        <div className="px-5 mt-20 flex flex-col sm:flex-row justify-end items-center gap-5">
          <input
            type="text"
            placeholder="Search Blog by Title"
            className="w-full p-3 py-4 border border-primary outline-none rounded-lg min-w-[unset] sm:!max-w-[250px]"
          />
          <button
            onClick={() => router.push('/blog/create')}
            className="w-full sm:w-[unset] flex items-center justify-center gap-1 bg-primary text-white p-4 px-10 text-sm rounded-lg">
            <BsPlus size={26} /> Create New Blog
          </button>
        </div>
        <div className="px-4 sm:px-5 mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-12">
          {
            blogs.map((item, idx) => (<div className="">
              <NextImage
                blurDataURL={randomLink}
                src={item.image_url}
                alt={item.title}
                className="w-full h-[200px]" />
              <div className="mt-3 flex flex-col gap-5">
                <p className="font-semibold">{item.title}</p>
                <div className="text-sm" dangerouslySetInnerHTML={{ __html: `${item.body.substring(0, 40)}...` }} ></div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <span>By:</span>
                    <span className="font-medium">{item.author}</span>
                  </div>
                  <p>{item.created_date}</p>
                </div>
                <button className="text-sm mt-5 font-medium bg-primary text-white py-3 rounded-lg flex">
                  <Link className="flex-1" href={`blog/${item.id}`} > Read More
                  </Link>
                </button>
              </div>
            </div>))
          }
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

export default BlogPage;
