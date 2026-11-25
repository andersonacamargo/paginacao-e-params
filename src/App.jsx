import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FeedPage from "./pages/FeedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed/:id" element={<FeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;