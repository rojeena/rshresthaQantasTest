import React from "react";
import { render, screen } from "@testing-library/react";
import Price from "./Price";

describe("Price Component", () => {
    const currentPrice = {
        cashPrice: { currencyCode: "$", amount: 50 },
        pointsPrice: { amount: 5000 },
    };

    const wasPrice = {
        cashPrice: { currencyCode: "$", amount: 100 },
        pointsPrice: { amount: 10000 },
    };

    it("renders wasPrice and currentPrice correctly", () => {
        render(<Price currentPrice={currentPrice} wasPrice={wasPrice} />);

        const wasPriceCash = screen.getByText(/\$100/);
        const currentPriceCash = screen.getByText(/\$50/);
        const wasPricePoints = screen.getByText(/10000 PTS/);
        const currentPricePoints = screen.getByText(/5000 PTS/);

        expect(wasPriceCash).toBeInTheDocument();
        expect(currentPriceCash).toBeInTheDocument();
        expect(wasPricePoints).toBeInTheDocument();
        expect(currentPricePoints).toBeInTheDocument();
    });

    it("does not render wasPrice when it is not provided", () => {
        render(<Price currentPrice={currentPrice} wasPrice={null} />);

        const wasPriceCash = screen.queryByText(/\$100/);
        const wasPricePoints = screen.queryByText(/10000 PTS/);
        const currentPriceCash = screen.getByText(/\$50/);
        const currentPricePoints = screen.getByText(/5000 PTS/);

        expect(wasPriceCash).not.toBeInTheDocument();
        expect(wasPricePoints).not.toBeInTheDocument();
        expect(currentPriceCash).toBeInTheDocument();
        expect(currentPricePoints).toBeInTheDocument();
    });

    it("renders Add to Cart button", () => {
        render(<Price currentPrice={currentPrice} wasPrice={wasPrice} />);
        const addToCartButton = screen.getByText(/ADD/i);

        expect(addToCartButton).toBeInTheDocument();
    });
});
