import Banner from "../../molecules/Banner/Banner";

import blog1 from 'public/bank-security.jpg';
import NextImage from "@/components/atom/NextImage/NextImage";
import Link from "next/link";

const BlogPage = () => {
  const blogs = [
    {
      id: '04ea-4arg-230m-u890b',
      title: 'Lorem ipsum dolor sit amet',
      content: 'This is only but a test blog for testing purpose. Please see it as it has been said',
      author: 'Test Person',
      date: '12/12/2023',
      img_url: blog1,
    },
    {
      id: 'cb61-091q-dpo9-uae00',
      title: 'Lorem ipsum dolor sit amet',
      content: 'This is only but a test blog for testing purpose. Please see it as it has been said',
      author: 'Test Person',
      date: '12/12/2023',
      img_url: blog1,
    },
    {
      id: '40otm-091q-ra4d-uae00',
      title: 'Lorem ipsum dolor sit amet',
      content: 'This is only but a test blog for testing purpose. Please see it as it has been said',
      author: 'Test Person',
      date: '12/12/2023',
      img_url: blog1,
    },
    {
      id: 'cb61-091q-dpo9-uae00',
      title: 'Lorem ipsum dolor sit amet',
      content: 'This is only but a test blog for testing purpose. Please see it as it has been said',
      author: 'Test Person',
      date: '12/12/2023',
      img_url: blog1,
    },
  ]

  return (
    <div className="text-grey-2 pt-24 ">
      {/* @ts-ignore */}
      <Banner text={"Blog"} />
      <div className="mt-10 grid grid-cols-4 gap-5 max-w-[1200px] mx-auto">
        {
          blogs.map((item, idx) => (<div className="">
            <NextImage src={item.img_url} alt={item.title} className="w-full h-[200px]" />
            <div className="mt-3 flex flex-col gap-5">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm">{item.content}</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span>By:</span>
                  <span className="font-medium">{item.author}</span>
                </div>
                <p>{item.date}</p>
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
  );
};

export default BlogPage;
