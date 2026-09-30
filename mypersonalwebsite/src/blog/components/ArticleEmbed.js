import React, { useEffect, useRef, useState } from "react";

const instagramHosts = new Set(["instagram.com", "www.instagram.com"]);
const instagramScriptId = "instagram-embed-script";
let instagramScriptPromise;

export function isInstagramUrl(value) {
  if (!value) {
    return false;
  }

  try {
    return instagramHosts.has(new URL(value).hostname.toLowerCase());
  } catch {
    return false;
  }
}

function loadInstagramScript() {
  if (window.instgrm?.Embeds) {
    return Promise.resolve();
  }

  if (instagramScriptPromise) {
    return instagramScriptPromise;
  }

  instagramScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(instagramScriptId);
    const script = existingScript || document.createElement("script");

    const handleLoad = () => resolve();
    const handleError = () => {
      instagramScriptPromise = undefined;
      reject(new Error("Instagram embed script failed to load."));
    };

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });

    if (!existingScript) {
      script.id = instagramScriptId;
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(script);
    }
  });

  return instagramScriptPromise;
}

const ArticleEmbed = ({ url, children }) => {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    let active = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.disconnect();
        setStatus("loading");

        loadInstagramScript()
          .then(() => {
            if (!window.instgrm?.Embeds) {
              throw new Error("Instagram embed API is unavailable.");
            }

            window.instgrm.Embeds.process();
            if (active) {
              setStatus("loaded");
            }
          })
          .catch(() => {
            if (active) {
              setStatus("failed");
            }
          });
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(container);

    return () => {
      active = false;
      observer.disconnect();
    };
  }, [url]);

  const label = children || "Instagram post or Reel";

  return (
    <div
      ref={containerRef}
      className={`blog-embed-shell is-${status}`}
      aria-live="polite"
    >
      <div className="blog-instagram-native">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={url}
          data-instgrm-version="14"
        >
          <a href={url}>{label}</a>
        </blockquote>
      </div>

      <a
        className="blog-embed-preview"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} — open on Instagram`}
      >
        <span className="blog-embed-mark" aria-hidden="true">IG</span>
        <span className="blog-embed-copy">
          <strong>{label}</strong>
          <span>{status === "loading" ? "Loading media from Instagram…" : "Interactive media from Instagram"}</span>
          <span className="blog-embed-action">Open on Instagram ↗</span>
        </span>
      </a>
    </div>
  );
};

export default ArticleEmbed;
