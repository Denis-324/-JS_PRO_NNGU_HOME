import React from "react";

import "./App.css";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
