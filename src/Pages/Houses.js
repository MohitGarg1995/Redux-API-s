import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FetchAPIData2 from "../features/fetchData/FetchAPIData2";

function Houses() {
  return (
    <div>
      <Header />
      <FetchAPIData2 />
      <Footer />
      Houses section
    </div>
  );
}

export default Houses;
