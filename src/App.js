import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="brand">Project Mini Blog</div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="p-3 mb-2 bg-primary text-white">
          <Routes>
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </header>
      </div>
    );
  }
}

export default App;
