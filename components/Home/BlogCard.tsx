import Image from "next/image";
import React from "react";
import { BiCalendar, BiMessage } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const BlogCard = ({
  blog,
}: {
  blog: {
    id: number;
    date: string;
    comment: string;
    title: string;
    shortDescription: string;
    image: string;
  };
}) => {
  return (
    <div className="overflow-hidden rounded-md bg-white">
      <div>
        <Image
          src={blog.image}
          alt={blog.title}
          width={300}
          height={300}
          className="w-full"
        />
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BiCalendar className="text-rose-500" />
              <span className="text-sm text-gray-700">{blog.date}</span>
            </div>

            <div className="flex items-center space-x-2">
              <BiMessage className="text-rose-500" />
              <span className="text-sm text-gray-700">{blog.comment}</span>
            </div>
          </div>
          <h1 className="mt-6 text-lg font-bold text-gray-700 hover:underline">
            {blog.title}
          </h1>
          <p className="text-base text-gray-500">{blog.shortDescription}</p>
          <div className="mt-4 flex cursor-pointer items-center space-x-2 hover:text-red-500">
            <span className="font-bold">Read More</span>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
