"use client";

import NextImage from "@/components/atom/NextImage/NextImage";
import { AiOutlineEye } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";

import { MdOutlineFacebook } from "react-icons/md";
import { FaBackward, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
import { format } from "date-fns";

import { ToastContainer } from "react-toastify";

import { useQuery } from "@tanstack/react-query";
import { getPostBySlug } from "@/lib/requests";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const BlogDetailsPage = () => {
  const router = useRouter();
  const blurDataURL =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7";

  const blogUrl = typeof window !== "undefined" ? window.location.href : "";

  const slug = router.query.blogId as string;

  const { data: blog } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
  });

  return (
    <div className="text-grey-2 pt-24 ">
      <button
        onClick={() => router.back()}
        className="w-full mb-5 mt-20 pt-10  flex items-center justify-center gap-1 text-sm"
      >
        <FaBackward />
        <span>Back</span>
      </button>
      <div className=" max-w-[1200px] mx-auto px-5">
        <h3 className="font-semibold text-2xl sm:text-5xl text-center mb-14">
          {blog?.title}
        </h3>
        <NextImage
          blurDataURL={blurDataURL}
          src={blog?.coverImage.url as string}
          alt="news image"
          isImage
          className="w-full h-[200px]  md:h-[400px] rounded-lg overflow-hidden"
        />
        <div className="pt-6 mt-10 flex justify-between border-t">
          <div className="flex items-center gap-6"></div>

          <div className="pr-6 seft-start text-xs md:text-sm">
            <span className="">
              {format(
                blog ? new Date(blog?.publishedAt) : new Date(),
                "MMMM dd, yyyy"
              )}
            </span>
            <p className="flex items-center gap-1 justify-end my-2">
              <AiOutlineEye /> {blog?.views}
            </p>
          </div>
        </div>
        <div className="my-20">
          <MarkdownRenderer content={blog?.content.markdown || ""} />
          <br /> <br />
          <div className="mt-10">
            <span>Please Like, Follow and Share.</span>
          </div>
          <div className="mt5 flex flex-col sm:flex-row gap-10 items-center justify-between">
            <div className="mt-5 flex items-center gap-3">
              <a
                href={`https://www.linkedin.com/shareArticle?url=${blogUrl}&title=Check out this blog post!`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-700 text-white p-2 px-3 text-xs rounded-lg"
              >
                <FaLinkedinIn size={17} /> Share
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${blogUrl}&text=Check out this blog post!`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-black text-white p-2 px-3 text-xs rounded-lg"
              >
                <ImTwitter size={17} /> Share
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-blue-500 text-white p-2 px-3 text-xs rounded-lg"
              >
                <MdOutlineFacebook size={17} /> Share
              </a>
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
