import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import paths from "./constants/paths";
import Results from "./pages/Results";
import Search from "./pages/Search";
import { theme } from "./shared/theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.background};
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={paths.SEARCH} element={<Search />} />
          <Route path={`${paths.RESULTS}/:searchValue`} element={<Results />} />
          <Route path="*" element={<Navigate to={paths.SEARCH} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
