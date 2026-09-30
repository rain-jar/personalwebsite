import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import ProjectsPage from "./pages/ProjectsPage";
import EachBlog from "./pages/EachBlog";
import { blogPosts } from "./blog/generated/posts";

const legacyBlogRoutes = {
  blog1: "first-blog-post",
  blog2: "learning-ai",
  blog3: "building-a-personal-website-using-ai",
};

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
            {Object.entries(legacyBlogRoutes).map(([legacyId, slug]) => (
              <Route
                key={legacyId}
                path={`/blog/${legacyId}`}
                element={<Navigate replace to={`/blog/${slug}`} />}
              />
            ))}
            <Route path="/blog/:slug" element={<EachBlog posts={blogPosts} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
