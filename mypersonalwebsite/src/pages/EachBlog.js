import React from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatPostDateLong } from "../blog/formatPostDate";
import ArticleEmbed, { isInstagramUrl } from "../blog/components/ArticleEmbed";
import "../blog/blog.css";

const markdownComponents = {
  p({ children }) {
    const paragraphChildren = React.Children.toArray(children);
    const onlyChild = paragraphChildren.length === 1 ? paragraphChildren[0] : null;

    if (React.isValidElement(onlyChild) && isInstagramUrl(onlyChild.props.href)) {
      return (
        <ArticleEmbed url={onlyChild.props.href}>
          {onlyChild.props.children || "Instagram post"}
        </ArticleEmbed>
      );
    }

    return <p>{children}</p>;
  },
  img({ alt, src, title }) {
    return (
      <span className="blog-article-media">
        <img src={src} alt={alt || ""} />
        {(title || alt) && <span className="blog-article-caption">{title || alt}</span>}
      </span>
    );
  },
  a({ children, href }) {
    const isExternal = /^https?:\/\//i.test(href || "");
    return (
      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
};

const EachBlog = ({ posts }) => {
  const { slug } = useParams();
  const post = posts.find((candidate) => candidate.slug === slug);

  if (!post) {
    return (
      <section className="blog-not-found" aria-labelledby="blog-not-found-title">
        <p className="blog-eyebrow">404 · Writing</p>
        <h1 id="blog-not-found-title">Post not found</h1>
        <p>The blog post you requested does not exist.</p>
        <Link className="blog-back-link" to="/blog">← Back to all writing</Link>
      </section>
    );
  }

  return (
    <article className="blog-article">
      <Link className="blog-back-link" to="/blog">← Back to all writing</Link>

      <header className="blog-article-header">
        {post.category && <p className="blog-eyebrow">{post.category}</p>}
        <h1 className="blog-article-title">{post.title}</h1>
        <p className="blog-article-deck">{post.summary}</p>
        <p className="blog-post-meta">
          <time dateTime={post.publishedAt}>{formatPostDateLong(post.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} min read</span>
        </p>
      </header>

      <div className="blog-article-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {post.content}
        </ReactMarkdown>
      </div>

      <footer className="blog-article-footer">
        <Link className="blog-back-link" to="/blog">← All writing</Link>
      </footer>
    </article>
  );
};

export default EachBlog;
