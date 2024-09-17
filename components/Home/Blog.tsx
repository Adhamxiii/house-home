import { blogs } from "@/data/data";
import SectionHeading from "../Helper/SectionHeading";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="bg-gray-100 pb-16 pt-16">
      <div className="mx-auto w-[80%]">
        <SectionHeading heading="Check Our Blogs" />
        <div className="mt-16 grid grid-cols-1 items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, i) => (
            <div
              key={blog.id}
              data-aos="zoom-out"
              data-aos-delay={i * 150}
              data-aos-anchor-placement="top-center"
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
