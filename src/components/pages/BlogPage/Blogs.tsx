import React from "react";
import NextImage from "@/components/atom/NextImage/NextImage";
import { getPosts } from "@/lib/requests";
import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";
import { AiOutlineRead } from "react-icons/ai";

export default function Blogs() {
  const { data, hasNextPage, fetchNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["posts"],
      queryFn: getPosts,
      getNextPageParam: (lastPage) =>
        lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
      initialPageParam: "",
    });

  const randomLink = "https://picsum.photos/id/1/200/300";

  const blogs = data?.pages.flat();

  if (!isLoading && !blogs?.length) {
    return (
      <div className="mt-14 flex flex-col gap-2 items-center justify-center text-center">
        <p>No blog articles posted yet</p>
        <p>Please check back later..</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      <div className="px-4 sm:px-5 mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-y-12">
        {blogs?.map(({ node, cursor }) => (
          <div key={cursor} className="h-full rounded-lg shadow-lg pb-4">
            <NextImage
              blurDataURL={randomLink}
              src={node.coverImage.url}
              alt={node.title}
              className="w-full h-[200px] object-cover overflow-hidden rounded-t-lg"
            />
            <div className="mt-3 flex flex-col gap-5 px-3">
              <p className="font-semibold">{node.title}</p>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: `${node.content.text.substring(0, 90)}...`,
                }}
              ></div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <NextImage
                    src={node.author.profilePicture as string}
                    blurDataURL={randomLink}
                    alt={node.author.name}
                    className="w-8 h-8 rounded-full overflow-hidden object-cover"
                  />
                  <span className="font-medium">{node.author.name}</span>
                </div>
                <div className="flex items-center gap-1.5 pr-4 text-xs">
                  {node.readTimeInMinutes} min read
                </div>
              </div>
              <button className="text-sm font-medium bg-primary text-white py-3 rounded-lg flex">
                <Link className="flex-1" href={`blog/${node.slug}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetching}
          className="w-max px-10 self-center bg-primary text-white py-3 rounded-lg mt-10"
        >
          {isFetching ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}
