import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import ProjectsPage from "./pages/ProjectsPage";
import EachBlog from "./pages/EachBlog";
import { blogPosts } from "./blog/generated/posts";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<BlogPage blogs={blogPosts} />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog/:slug" element={<EachBlog posts={blogPosts} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
