// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/footer'; // Adjust the import path as necessary

describe('Footer', () => {
  test('renders footer with correct text', () => {
    render(<Footer />);

    // Check if the copyright text is in the document
    const copyrightText = screen.getByText(/© 2024 . All Rights Reserved./i);
    expect(copyrightText).toBeInTheDocument();

    // Check if the navigation items are in the document
    const aboutLink = screen.getByText(/About/i);
    const privacyPolicyLink = screen.getByText(/Privacy Policy/i);
    const licensingLink = screen.getByText(/Licensing/i);
    const contactLink = screen.getByText(/Contact/i);

    expect(aboutLink).toBeInTheDocument();
    expect(privacyPolicyLink).toBeInTheDocument();
    expect(licensingLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('renders footer with correct classes', () => {
    render(<Footer />);
    
    const footerElement = screen.getByRole('contentinfo');
    
    expect(footerElement).toHaveClass('rounded-lg');
    expect(footerElement).toHaveClass('shadow');
    expect(footerElement).toHaveClass('bg-gray-800');
  });
});
