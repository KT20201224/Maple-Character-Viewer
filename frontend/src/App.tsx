import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import CharacterPage from "./pages/CharacterPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/character/:ocid" element={<CharacterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
