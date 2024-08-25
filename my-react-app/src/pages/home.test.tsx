import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './home';
import '@testing-library/jest-dom';
 
describe('HomePage', () => {
  test('renders welcome message', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const welcomeMessage = screen.getByText('Welcome, Sumanth');
    expect(welcomeMessage).toBeInTheDocument();
  });
 
  test('renders account section title', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const accountTitle = screen.getByText('Your Account');
    expect(accountTitle).toBeInTheDocument();
  });
 
  test('renders personal information card', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const personalInfo = screen.getByText('Personal Information');
    expect(personalInfo).toBeInTheDocument();
  });
 
  test('renders account settings link', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const accountSettingsLink = screen.getByText('Account Settings');
    expect(accountSettingsLink).toBeInTheDocument();
  });
 
  test('renders user management card', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const userManagement = screen.getByText('User Management');
    expect(userManagement).toBeInTheDocument();
  });
 
  test('renders launchPad link', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const launchPadLink = screen.getByText('LaunchPad');
    expect(launchPadLink).toBeInTheDocument();
  });
 
  test('renders explore section title', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const exploreTitle = screen.getByText('Explore');
    expect(exploreTitle).toBeInTheDocument();
  });
 
  test('renders marketplace link', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const marketplaceLink = screen.getByText('Marketplace');
    expect(marketplaceLink).toBeInTheDocument();
  });
 
  test('renders documentation card', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const documentation = screen.getByText('Documentation');
    expect(documentation).toBeInTheDocument();
  });
});