import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="max-w-[1380px] my-0 mx-auto bg-[#FFF] shadow-App font-Nunito">
      <Header />
      <Home />
    </div>
  );
};

export default App;
