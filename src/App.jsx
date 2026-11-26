import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FeedPage from "./pages/FeedPage";
import CreateFeed from "./pages/CreateFeed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed/:id" element={<FeedPage />} />
        <Route path="/feed/novo" element={<CreateFeed />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;