import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FetchData from "../features/fetchData/FetchData";
// import Data from "../features/fetchData/FetchAPIData2";

function Books() {
  return (
    <div>
      <Header />
      <FetchData />
      {/* <Data /> */}
      <Footer />
      This is book section
    </div>
  );
}

export default Books;
