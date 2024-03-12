import Banner from "../../molecules/Banner/Banner";

import { useRouter } from "next/router";
import { BsPlus } from "react-icons/bs";

import { useState } from "react";
import { ToastContainer } from "react-toastify";

import Blogs from "./Blogs";

export type BlogType = {
  id: string;
  title: string;
  body: string;
  author: string;
  category: string;
  created_date: string;
  image_url: string;
};

const BlogPage = () => {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="text-grey-2 pt-24 blog">
      {/* @ts-ignore */}
      <Banner text={"Blog"} />
      <div className="max-w-[1200px] mx-auto">
        <div className="px-5 mt-20 flex flex-col sm:flex-row justify-end items-center gap-5">
          {loggedIn ? (
            <button
              onClick={() => router.push("/blog/create")}
              className="w-full sm:w-[unset] flex items-center justify-center gap-1 bg-primary text-white p-4 px-10 text-sm rounded-lg"
            >
              <BsPlus size={26} /> Create New Blog
            </button>
          ) : null}
        </div>

        <Blogs />
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
