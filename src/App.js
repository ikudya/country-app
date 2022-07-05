import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {HomePage} from "./Components/Pages/HomePage";
import {NotFound} from "./Components/Pages/NotFound";
import {Details} from "./Components/Pages/Details/Details";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";



function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
    <Header/>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
