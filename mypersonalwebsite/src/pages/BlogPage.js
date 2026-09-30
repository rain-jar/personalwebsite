import React from "react";
import { Link } from "react-router-dom";
import {
  formatPostDateLong,
  formatPostDateShort,
  getPostYear,
} from "../blog/formatPostDate";
import "../blog/blog.css";

function groupPostsByYear(posts) {
  return posts.reduce((groups, post) => {
    const year = getPostYear(post.publishedAt);
    const postsForYear = groups.get(year) || [];
    postsForYear.push(post);
    groups.set(year, postsForYear);
    return groups;
  }, new Map());
}

const BlogPage = ({ blogs }) => {
  const featuredPost = blogs.find((post) => post.featured) || blogs[0];
  const postsByYear = groupPostsByYear(blogs);

  return (
    <section className="blog-index" aria-labelledby="blog-index-title">
      <header className="blog-index-intro">
        <div>
          <p className="blog-eyebrow">Notes, experiments &amp; ideas</p>
          <h1 id="blog-index-title" className="blog-index-title">Writing</h1>
        </div>
        <p className="blog-index-description">
          I write about building with AI, learning in public, and the small
          systems that help ideas become real.
        </p>
      </header>

      {featuredPost && (
        <Link
          className="blog-featured"
          to={`/blog/${featuredPost.slug}`}
          aria-label={`Featured post: ${featuredPost.title}`}
        >
          <div className="blog-featured-copy">
            <p className="blog-eyebrow">
              Featured{featuredPost.category ? ` · ${featuredPost.category}` : ""}
            </p>
            <h2>{featuredPost.title}</h2>
            <p className="blog-featured-summary">{featuredPost.summary}</p>
            <p className="blog-post-meta">
              <time dateTime={featuredPost.publishedAt}>
                {formatPostDateLong(featuredPost.publishedAt)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{featuredPost.readingTime} min read</span>
            </p>
          </div>
          <div className="blog-featured-art" aria-hidden="true">
            <span>idea</span><i>→</i><span>prompt</span><i>→</i><span>website</span>
          </div>
        </Link>
      )}

      <section className="blog-contents" aria-labelledby="blog-contents-title">
        <header className="blog-contents-header">
          <h2 id="blog-contents-title">Contents</h2>
          <span>{blogs.length} {blogs.length === 1 ? "post" : "posts"}</span>
        </header>

        {[...postsByYear.entries()].map(([year, posts]) => (
          <section className="blog-year-group" key={year} aria-labelledby={`blog-year-${year}`}>
            <h3 id={`blog-year-${year}`} className="blog-year-label">
              {year} / {String(posts.length).padStart(2, "0")}
            </h3>
            <div className="blog-year-posts">
              {posts.map((post) => (
                <Link className="blog-post-row" to={`/blog/${post.slug}`} key={post.slug}>
                  <span>
                    <span className="blog-post-title">{post.title}</span>
                    <span className="blog-post-summary">{post.summary}</span>
                  </span>
                  <span className="blog-post-data">
                    <time dateTime={post.publishedAt}>{formatPostDateShort(post.publishedAt)}</time>
                    <span aria-hidden="true"> · </span>
                    {post.readingTime} MIN
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};

export default BlogPage;
