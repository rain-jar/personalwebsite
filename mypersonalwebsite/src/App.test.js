import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page', () => {
  window.history.pushState({}, '', '/');
  render(<App />);
  expect(screen.getByRole('heading', { name: /raj nair/i })).toBeInTheDocument();
});

test('renders generated posts on the blog index', () => {
  window.history.pushState({}, '', '/blog');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Writing' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Contents' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Learning AI/i })).toHaveAttribute('href', '/blog/learning-ai');
  expect(screen.getByRole('link', { name: /First Blog Post/i })).toHaveAttribute('href', '/blog/first-blog-post');
  expect(screen.getByLabelText(/Featured post: Learning Agents - Day 1/i)).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /complete loop from a customer note/i })).toHaveAttribute(
    'src',
    '/blog-media/learning-agents-day-1/api-round-trip.svg'
  );
});

test('renders a Markdown post from its slug', () => {
  window.history.pushState({}, '', '/blog/learning-ai');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Learning AI' })).toBeInTheDocument();
  expect(screen.getByText(/different aspects of the AI tech/i)).toBeInTheDocument();
});

test('renders the featured Learning Agents article', () => {
  window.history.pushState({}, '', '/blog/learning-agents-day-1');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Learning Agents - Day 1' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /complete loop from a customer note/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /business workflow that takes data/i })).toBeInTheDocument();
  expect(screen.getAllByText('response = client.responses.create(', { exact: false })).toHaveLength(2);
});

test('renders rich Markdown content inside the article layout', () => {
  window.history.pushState({}, '', '/blog/building-a-personal-website-using-ai');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Building a Personal Website Using AI' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /back to all writing/i })).toHaveAttribute('href', '/blog');
  expect(screen.getByRole('heading', { name: 'AI changed the starting point' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /three-step workflow/i })).toBeInTheDocument();
  expect(screen.getByRole('table')).toBeInTheDocument();
  expect(screen.getByText('const workflow = [', { exact: false })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view this related instagram post.*open on instagram/i })).toHaveAttribute(
    'href',
    'https://www.instagram.com/p/Db_cGazjsAg/?img_index=1'
  );
});

test('renders a not-found state for an unknown post', () => {
  window.history.pushState({}, '', '/blog/does-not-exist');
  render(<App />);
  expect(screen.getByRole('heading', { name: /post not found/i })).toBeInTheDocument();
});
