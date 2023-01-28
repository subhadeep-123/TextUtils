import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import NoPage from "./components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar title="TextUtils" aboutText="About TextUtils" />
        <Routes>
          <Route
            index
            element={<TextForm heading="Enter the text to analyze below" />}
          />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
