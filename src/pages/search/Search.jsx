import React, { useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../../components/SearchPage/SearchForm/SearchForm";
import ResultList from "../../components/SearchPage/ResultList/ResultList";

const Search = () => {
  // State quản lý data được lấy từ Searchform
  const [inputData, setInputData] = useState(null);
  //Hàm lấy dữ liệu từ SearchForm (Lifting State Up)
  const onSaveDataHandler = (data) => {
    setInputData(data);
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="search_container">
        <SearchForm onSaveData={onSaveDataHandler} />
        <ResultList query={inputData} />
      </div>
    </React.Fragment>
  );
};

export default Search;
