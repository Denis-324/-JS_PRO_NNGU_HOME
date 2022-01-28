import React from "react";
import { Route, Routes } from "react-router-dom";
import routesConfig from "../../assets/routesConfig";
import PageGrid from "../../components/common/PageGrid";
import PageWrapper from "../../components/common/PageWrapper";
import ProductPage from "../ProductPage";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/product" element={<PageGrid />}>
        <Route path="/product" element={<ProductPage />} />
      </Route>
      <Route path="/" element={<PageWrapper />}>
        {routesConfig.map((el) => (
          <Route path={el.path} element={el.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
