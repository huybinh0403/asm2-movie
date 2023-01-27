import React, { useState } from "react";

import "./SearchForm.css";

const SearchForm = (props) => {
  //State quản lý data khi nhập ở input
  const [enteredValue, setEnteredValue] = useState("");

  //Hàm xử lý sự kiện khi có thay đổi ở input
  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  //Hàm xử lý sự kiện khi click search button
  const searchHandler = () => {
    props.onSaveData(enteredValue); // lấy dữ liệu vừa nhập để truyền lên cho component cha (Search.jsx)
  };

  //Hàm xử lý sự kiện khi click reset button
  const resetHandler = () => {
    setEnteredValue("");
  };

  return (
    <div className="searchForm">
      <form>
        {/* Phần input field */}
        <div className="searchForm_input_field">
          <input
            type="text"
            onChange={inputChangeHandler}
            value={enteredValue}
            className="searchForm_input"
          />

          <div className="searchForm_icon">
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
        </div>
        {/* Phần button */}
        <div className="searchForms_buttons">
          <button className="btn_reset" type="button" onClick={resetHandler}>
            Reset
          </button>
          <button className="btn_search" type="button" onClick={searchHandler}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
