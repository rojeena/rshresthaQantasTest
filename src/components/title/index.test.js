import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../title';

describe('Title Component', () => {

    it("renders Sale badge when isSale is true", () => {
        render(<Title isSale={true} name="Product Name" description="Product Description" />);
        const saleBadge = screen.getByText(/Sale/i);
        expect(saleBadge).toBeInTheDocument();
    });

    it("does not render Sale badge when isSale is false", () => {
        render(<Title isSale={false} name="Product Name" description="Product Description" />);
        const saleBadge = screen.queryByText(/Sale/i);
        expect(saleBadge).not.toBeInTheDocument();
    });
});
