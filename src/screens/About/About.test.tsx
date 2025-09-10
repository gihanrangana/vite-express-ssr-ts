import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import About from './About';

// Mock the useHelmet hook
vi.mock('@hooks/useHelmet', () => ({
    default: () => ({
        setTitle: vi.fn(),
    }),
}));

describe('About', () => {
    it('should render the about page', () => {
        render(
            <MemoryRouter>
                <HelmetProvider>
                    <About />
                </HelmetProvider>
            </MemoryRouter>
        );
        expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument();
    });
});
