import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import BlogCard from "./BlogCard";

const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      {/* Blog List */}
      <main className="container">
        {[1, 2, 3].map((item, index) => (
          <BlogCard item={item} key={index} />
        ))}
      </main>
    </>
  );
};

export default Home;
