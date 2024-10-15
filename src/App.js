import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <div className="font-Nunito max-w-[1380px] my-0 mx-auto bg-[#FFF] shadow-[0_14px_20px_0_rgba(0,0,0,0.05)]">
      <Header />
      <Home />
    </div>
  );
};

export default App;
