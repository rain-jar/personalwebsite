import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import ProjectsPage from "./pages/ProjectsPage";
import EachBlog from "./pages/EachBlog";

function App() {

  const blogs = [
    {
      id: "blog1",
      title: "First Blog Post",
      date: "Sep 19",
      readTime: "5min",
      description : "This is the very post",
      content: "This is the very post on this website. Can't wait to add more. Keep an eye out.",
    },
    {
      id: "blog2",
      title: "Learning AI",
      date: "Sep 24",
      readTime: "12min",
      description : "Learning plan",
      content: "How do I plan to go about learning the different aspects of the AI tech.",
    },

    {
      id: "blog3",
      title: "Building a Personal Website using AI",
      date: "Sep 19",
      readTime: "5",
      description : "Step by Step guide",
      content: "This post will explain in detail how I used Claude, ChatGPT and Replit to create my personal website from scratch without any/minimal coding knowledge",
    },

    // Add more blog objects
  ];

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<BlogPage blogs={blogs} />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {blogs.map((blog) => (
              <Route
                key={blog.id}
                path={`/blog/${blog.id}`}
                element={
                  <EachBlog
                    title={blog.title}
                    date={blog.date}
                    readTime={blog.readTime}
                    content={blog.content}
                  />
                }
              />
            ))}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
