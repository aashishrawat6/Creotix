import React from "react";
import "./Blog.css";
import blog1 from "/blog1.jpg";
import blog2 from "/blog2.png";
import blog3 from "/blog3.jpg";
import eye from "/eye.svg";
import comment from "/comment.svg";
const Blog = () => {
  const data = [
    {
      id: 1,
      img: blog1,
      date: "April 15, 2025",
      views: "48",
      comments: "10",
      title: "Top 5 Trends in Enterprise Software Development",
      about:
        "Discover how AI, microservices, and cloud-native solutions are transforming enterprise software in 2025.",
    },
    {
      id: 2,
      img: blog2,
      date: "March 28, 2025",
      views: "48",
      comments: "10",
      title: "How to Choose the Right Tech Stack for Your Project",
      about:
        "Avoid costly mistakes — learn how to pick the best tools, frameworks, and platforms based on your business needs.",
    },
    {
      id: 3,
      img: blog3,
      date: "April 2, 2025",
      views: "48",
      comments: "10",
      title: "Cybersecurity Best Practices for SMBs",
      about:
        "Simple steps that small and mid-sized businesses can take to protect their apps, data, and users.",
    },
  ];
  return (
    <section id="blog">
      <div className="section">
        <div className="container">
          <div className="head">
            <h3 className="subHeading">blog</h3>
            <div className="subBlogHead">
              <h1 className="heading">
                Fresh Ideas in Tech, Design & Development
              </h1>
              <div className="ctaButton">View all</div>
            </div>
          </div>
          <div className="body">
            {data.map((blog) => {
              return (
                <div className="blogBox" key={blog.id}>
                  <div className="imageBox">
                    <img src={blog.img} alt="" className="blogImage" />
                  </div>
                  <div className="about">
                    <div className="timeline">
                      <span>{blog.date}</span>
                      <div className="timelineRight">
                        <span>
                          <img src={eye} alt="" />
                          {blog.views} Views
                        </span>
                        <span>
                          <img src={comment} alt="" />
                          {blog.comments} Comments
                        </span>
                      </div>
                    </div>
                    <h2>{blog.title}</h2>
                    <p>{blog.about}</p>
                    <button type="button">Read More</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
