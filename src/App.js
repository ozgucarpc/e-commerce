import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import PagesContainer from "./containers/PagesContainer";
import { useSelector } from "react-redux";
import Cards from "./components/Cards";

function App() {
  const { drawer } = useSelector((state) => state.drawer);

  console.log("drawer", drawer);

  return (
    <div className="App">
      <PagesContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Routes>
          {drawer && <Cards />}

          <Footer />
        </BrowserRouter>
      </PagesContainer>
    </div>
  );
}

export default App;
