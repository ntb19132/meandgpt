import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MeAndGPT from './MeAndGPT';

describe('MeAndGPT component', () => {
  beforeEach(() => {
    // Mock window.location.href changes
    delete window.location;
    window.location = { href: '' };
  });

  test('renders MeAndGPT component', () => {
    render(<MeAndGPT />);
    const titleElement = screen.getByText(/Welcome to/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('handleCardClick should update the window location for aboutGPTCard', () => {
    render(<MeAndGPT />);
    const aboutGPTCard = screen.getByText(/About GPT →/i).closest('div');
    fireEvent.click(aboutGPTCard);
    expect(window.location.href).toBe('https://openai.com/blog/chatgpt');
  });

  test('handleCardClick should update the window location for learnMoreCard', () => {
    render(<MeAndGPT />);
    const learnMoreCard = screen.getByText(/Learn More →/i).closest('div');
    fireEvent.click(learnMoreCard);
    expect(window.location.href).toBe('https://www.gatesnotes.com/The-Age-of-AI-Has-Begun');
  });

  test('handleCardClick should open modal for other cards', () => {
    render(<MeAndGPT />);
    const mottoCard = screen.getByText(/Our Motto →/i).closest('div');
    fireEvent.click(mottoCard);
    const modalElement = screen.getByText(/The website is currently under development\./i);
    expect(modalElement).toBeInTheDocument();
  });

  test('handleCloseModal should close the modal', () => {
    render(<MeAndGPT />);
    const mottoCard = screen.getByText(/Our Motto →/i).closest('div');
    fireEvent.click(mottoCard);
    const closeModalButton = screen.getByText(/Close/i);
    fireEvent.click(closeModalButton);
    const modalElement = screen.queryByText(/The website is currently under development\./i);
    expect(modalElement).not.toBeInTheDocument();
  });
});
