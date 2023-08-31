import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
