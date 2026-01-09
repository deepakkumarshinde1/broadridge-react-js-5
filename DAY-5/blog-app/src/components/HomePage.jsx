import { useNavigate } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      {/* Blog List */}
      <main className="container">
        {[1, 2, 3].map((item) => (
          <div
            className="blog-card"
            key={item}
            onClick={() => navigate("/blog-details")}
          >
            <div className="blog-image">
              <i className="fa fa-image"></i>
            </div>

            <div className="blog-content">
              <h2 className="blog-title">Blog Title {item}</h2>
              <p className="blog-desc">
                This is a short description of the blog post. It gives users a
                quick idea about the content.
              </p>

              <div className="blog-meta">
                <span>
                  <i className="fa fa-user"></i> Admin
                </span>
                <span>
                  <i className="fa fa-calendar"></i> Jan 2026
                </span>
              </div>
            </div>

            <div className="blog-action">
              <button className="like-btn">
                <i className="fa fa-heart"></i> Like
              </button>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;
