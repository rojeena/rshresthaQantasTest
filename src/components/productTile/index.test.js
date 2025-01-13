import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductTile from '../productTile';

describe('ProductTile Component', () => {
    const mockProduct = {
        tag: 'sale',
        name: 'Test Product',
        description: 'This is a test product description.',
        image: 'test-image.jpg',
        currentPrice: {
            cashPrice: {
                currencyCode: "$",
                amount: 500,    
            },
            pointsPrice: {
                amount: 12500
            },
        }
    };

    it('renders the ProductTile component with correct structure', () => {
        render(<ProductTile product={mockProduct} />);

        expect(screen.getByText('Sale')).toBeInTheDocument();
        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('This is a test product description.')).toBeInTheDocument();
        expect(screen.getByText('$500')).toBeInTheDocument();
        expect(screen.getByText('12500 PTS')).toBeInTheDocument();
        
    });
});
