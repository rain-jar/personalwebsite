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
  expect(screen.getByText('1 post')).toBeInTheDocument();
  expect(screen.getByLabelText(/Featured post: Learning Agents - Day 1/i)).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /complete loop from a customer note/i })).toHaveAttribute(
    'src',
    '/blog-media/learning-agents-day-1/api-round-trip.svg'
  );
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
