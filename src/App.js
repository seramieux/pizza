import React from "react";
import Context from "./context";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [openCart, setOpenCart] = React.useState(false);

  return (
    <Context.Provider
      value={{ searchValue, setSearchValue, openCart, setOpenCart }}
    >
      <div className="font-nunito my-0 mx-auto max-w-[1380px]">
        {openCart && <Drawer />}
        <Header />
        <Home />
      </div>
    </Context.Provider>
  );
};

export default App;
