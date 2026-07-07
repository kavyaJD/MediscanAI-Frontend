import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Diagnosis from "./pages/Diagnosis";
import Result from "./pages/Result";
import Analysis from "./pages/Analysis";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/result" element={<Result />}
         />
         <Route
 path="/analysis"
 element={<Analysis />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;