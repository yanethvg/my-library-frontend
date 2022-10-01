import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/basic/Menu";
import { Routers } from "./Routers";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container mx-auto">
        <Routers />
      </div>
    </BrowserRouter>
  );
}

export default App;
