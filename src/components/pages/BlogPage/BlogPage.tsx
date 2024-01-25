import Banner from "../../molecules/Banner/Banner";

import blog1 from 'public/bank-security.jpg';
import NextImage from "@/components/atom/NextImage/NextImage";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsPlus } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ImSpinner2 } from "react-icons/im";

export type BlogType = {
  id: string,
  title: string,
  body: string,
  author: string,
  category: string,
  created_date: string,
  image_url: string,
}

type PaginationType = {
  currentPage: number,
  totalPages: number,
}

const BlogPage = () => {

  const router = useRouter();
  const [blogs, setBlogs] = useState([] as Array<BlogType>);
  const randomLink = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7';
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ currentPage: 1, totalPages: 1 } as PaginationType)
  const [loading, setLoading] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`https://blog.jointpowersecurity.com/server.php?page=${page}`).then(res => {
      setBlogs(res.data.data)
      setPagination(res.data.pagination)
      console.log(res.data)
    }).finally(() => setLoading(false))

    if (typeof window != undefined) {
      const auth = window.localStorage.getItem('loggedIn');
      if (auth === 'yes') {
        setLoggedIn(true)
      }
    }

  }, [page])


  return (
    <div className="text-grey-2 pt-24 blog">
      {/* @ts-ignore */}
      <Banner text={"Blog"} />
      <div className="max-w-[1200px] mx-auto">
        <div className="px-5 mt-20 flex flex-col sm:flex-row justify-end items-center gap-5">
          {loggedIn ? <button
            onClick={() => router.push('/blog/create')}
            className="w-full sm:w-[unset] flex items-center justify-center gap-1 bg-primary text-white p-4 px-10 text-sm rounded-lg">
            <BsPlus size={26} /> Create New Blog
          </button> : null}
        </div>
        {
          !loading ? <div className="px-4 sm:px-5 mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-12">
            {
              blogs.map((item, idx) => (<div key={idx} className="h-full">
                <NextImage
                  blurDataURL={randomLink}
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-[200px] object-cover" />
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
          </div> :
            <div className="py-20 text-center grid place-content-center gap-2 mt-20">
              <div className="flex items-center gap-2">
                <span><ImSpinner2 className="animate-spin" /></span>
                <span>Loading..</span>
              </div>
              <p>Please Wait</p>
            </div>
        }
        {!loading && blogs.length ? <div className="flex justify-center items-center gap-2 mt-20">
          {
            Array.from({ length: pagination.totalPages }, (_, idx) => idx + 1).map(item => (
              <button
                key={item}
                className={`hover:!text-white px-3 py-2 rounded-lg ${pagination.currentPage === item ? 'bg-normal text-white' : 'bg-slate-600 text-black'}`}
                onClick={() => setPage(item)}
              >{item}</button>
            ))
          }
        </div> : null}
        {!loading && !blogs.length ? <div className="mt-14 flex flex-col gap-2 items-center justify-center text-center">
          <p>No blog articles posted yet</p>
          <p>Please check back later..</p>
        </div> : null}
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
