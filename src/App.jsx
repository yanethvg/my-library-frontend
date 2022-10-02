import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Menu from "./components/basic/Menu";
import { Routers } from "./Routers";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <HashRouter>
      <Menu />
      <ToastContainer autoClose={8000} />
      <div className="container mx-auto">
        <Routers />
      </div>
    </HashRouter>
  );
}

export default App;
