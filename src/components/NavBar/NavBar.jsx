import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  //State quản lý background-color của NavBar khi scroll
  const [isTopPage, setIsTopPage] = useState(true);

  //Sử dụng useEffect để xử lý khi scroll
  useEffect(() => {
    const scrollHandler = () => {
      // console.log(window.scrollY);
      if (window.scrollY >= 100) {
        setIsTopPage(false);
      } else {
        setIsTopPage(true);
      }
    };
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    //Khi cuộn xuống quá 100px thì NavBar có màu đen
    <div className={`navBar ${!isTopPage && "navBar_black"}`}>
      <Link to="/" className="navBar_title">
        <span>Movie App</span>
      </Link>

      <Link to="/search">
        <div className="navBar_icon">
          <svg
            className="svg-inline--fa fa-search fa-w-16"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
