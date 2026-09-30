import { act, render, screen, waitFor } from "@testing-library/react";
import ArticleEmbed, { isInstagramUrl } from "./ArticleEmbed";

test("recognizes supported Instagram links", () => {
  expect(isInstagramUrl("https://www.instagram.com/reel/example/")).toBe(true);
  expect(isInstagramUrl("https://instagram.com/p/example/")).toBe(true);
  expect(isInstagramUrl("https://example.com/instagram.com")).toBe(false);
  expect(isInstagramUrl("not a URL")).toBe(false);
});

test("renders an accessible external fallback", () => {
  const url = "https://www.instagram.com/reel/example/";
  render(<ArticleEmbed url={url}>Watch the project Reel</ArticleEmbed>);

  const link = screen.getByRole("link", { name: /watch the project reel.*open on instagram/i });
  expect(link).toHaveAttribute("href", url);
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
});

test("processes the native embed when it approaches the viewport", async () => {
  let observeCallback;
  const process = jest.fn();
  const originalObserver = window.IntersectionObserver;
  const originalInstagram = window.instgrm;

  window.IntersectionObserver = class {
    constructor(callback) {
      observeCallback = callback;
    }

    observe() {}
    disconnect() {}
  };
  window.instgrm = { Embeds: { process } };

  const { container } = render(
    <ArticleEmbed url="https://www.instagram.com/p/example/">Example post</ArticleEmbed>
  );

  act(() => observeCallback([{ isIntersecting: true }]));

  await waitFor(() => expect(process).toHaveBeenCalledTimes(1));
  expect(container.querySelector(".blog-embed-shell")).toHaveClass("is-loaded");

  window.IntersectionObserver = originalObserver;
  window.instgrm = originalInstagram;
});
