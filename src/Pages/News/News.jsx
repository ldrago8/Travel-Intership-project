import React from 'react';
import './News.css';
import food from '../../Assets/food.png'
import resort from '../../Assets/resort.png'
import home1 from '../../Assets/home1.jpg';
const News = () => {
  const posts = [
    { image: food, date: 'February 26, 2018', title: 'Free Template by Colorlib' },
    { image: resort, date: 'February 26, 2018', title: 'Free Template by Colorlib' },
    { image: food, date: 'February 26, 2018', title: 'Free Template by Colorlib' },
    { image: resort, date: 'February 26, 2018', title: 'Free Template by Colorlib' },
  ];

  return (
    <div>
      <div className="main">
        <img src={home1} alt="travel" className="image" />
        <div className="logo">Hepta</div>
        <div className="text">
          <h1>Blog</h1>
          <h4>A free template by Colorlib. Download and share!</h4>
        </div>
      </div>

      <div className="content-container">
        <div className="left">
          {posts.map((post, index) => (
            <div key={index} className="card">
              <img src={post.image} alt="blog" />
              <p className="date">{post.date}</p>
              <h3>{post.title}</h3>
            </div>
          ))}
        </div>
        <div className="right">
          <input type="text" placeholder="Search..." className="search" />
          <h4>Popular Post</h4>
          <div className="popular-posts">
            {posts.map((post, index) => (
              <div key={index} className="popular-post">
                <img src={post.image} alt="thumb" />
                <div>
                  <p className="date">{post.date}</p>
                  <h5>{post.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
