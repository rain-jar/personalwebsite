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
  expect(screen.getByText('2 posts')).toBeInTheDocument();
  expect(screen.getByLabelText(/Featured post: The Instagram Daily Digest/i)).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /instagram content moving through muse/i })).toHaveAttribute(
    'src',
    '/blog-media/instagram-daily-digest-template/featured-workflow.svg'
  );
});

test('renders the featured Instagram Daily Digest article', () => {
  window.history.pushState({}, '', '/blog/instagram-daily-digest-template');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'The Instagram Daily Digest — A Template for Your Own Muse' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'The Master Prompt' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'A lighter version' })).toBeInTheDocument();
  expect(screen.getByText('Build me a daily Instagram digest.', { exact: false })).toBeInTheDocument();
});

test('renders the featured Learning Agents article', () => {
  window.history.pushState({}, '', '/blog/learning-agents-day-1');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Learning Agents - Day 1' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /complete loop from a customer note/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /business workflow that takes data/i })).toBeInTheDocument();
  expect(screen.getAllByText('response = client.responses.create(', { exact: false })).toHaveLength(2);
});

test('renders a not-found state for an unknown post', () => {
  window.history.pushState({}, '', '/blog/does-not-exist');
  render(<App />);
  expect(screen.getByRole('heading', { name: /post not found/i })).toBeInTheDocument();
});

test('renders a not-found state for a removed post', () => {
  window.history.pushState({}, '', '/blog/building-a-personal-website-using-ai');
  render(<App />);
  expect(screen.getByRole('heading', { name: /post not found/i })).toBeInTheDocument();
});
