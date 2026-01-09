import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import BlogCard from "./BlogCard";
import { useBlogContext } from "../context/blog.context";

const Home = () => {
  let navigate = useNavigate();
  let { blogs } = useBlogContext();
  return (
    <>
      {/* Blog List */}
      <main className="container">
        {blogs.map((blog, index) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </main>
    </>
  );
};

export default Home;
