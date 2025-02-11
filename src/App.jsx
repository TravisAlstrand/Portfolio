import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Sections/Header";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
