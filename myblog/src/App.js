import "./App.css";
import ArticleListPage from "./Pages/ArticleListPage";
import ArticlePage from "./Pages/ArticlePage";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <h1>My Blog</h1>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
