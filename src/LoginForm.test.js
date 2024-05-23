// src/LoginForm.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from './LoginForm';

test('renders login form', () => {
  render(<LoginForm />);
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
  expect(screen.getByText(/forgot password\?/i)).toBeInTheDocument();
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

test('allows user to input data', () => {
  render(<LoginForm />);

  const emailInput = screen.getByLabelText(/email/i);
  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const rememberMeCheckbox = screen.getByLabelText(/remember me/i);

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(rememberMeCheckbox);

  expect(emailInput.value).toBe('test@example.com');
  expect(usernameInput.value).toBe('testuser');
  expect(passwordInput.value).toBe('password');
  expect(rememberMeCheckbox.checked).toBe(true);
});

test('submit form data', () => {
  render(<LoginForm />);

  const emailInput = screen.getByLabelText(/email/i);
  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const rememberMeCheckbox = screen.getByLabelText(/remember me/i);
  const submitButton = screen.getByText(/login/i);

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(rememberMeCheckbox);

  fireEvent.click(submitButton);

 
});

test('shows forgot password alert', () => {
  render(<LoginForm />);
  
  const forgotPasswordLink = screen.getByText(/forgot password\?/i);
  fireEvent.click(forgotPasswordLink);

  
  expect(forgotPasswordLink).toBeInTheDocument();
});
