const wasPriceStyle = {
    textDecoration: "line-through",
    fontSize: 12,
    fontWeight: 400
};
const currentPriceStyle = {
    fontSize: 22,
    fontWeight: 400,
};
const redColorFontStyle = {
    color: "#e40000"
};
const priceFooterStyle = {
    margin: "12px 0",
    display: "flex",
    justifyContent: "space-between",
};
const pointsStyle = {
    margin: "12px 0",
    fontWeight: 550,
};
const priceWithoutWasPriceStyle = {
    margin: "26px 0px 18px",
}
const addToCartStyle = {
    borderRadius: 4,
    backgroundColor: "#e40000",
    padding: "12px 16px",
    border: 0,
    color: "#fff",
};

const Price = ({ currentPrice, wasPrice }) => {
    const AddToCart = () => <button style={addToCartStyle}>ADD</button>;

    return (<>
        {
            wasPrice ? <>
                <div>
                    <div style={wasPriceStyle}>{wasPrice.cashPrice.currencyCode} {wasPrice.cashPrice.amount}</div>
                    <div
                        style={{...currentPriceStyle, ...redColorFontStyle}}>{currentPrice.cashPrice.currencyCode}{currentPrice.cashPrice.amount}</div>
                </div>
                <div style={priceFooterStyle}>
                    <div>
                        Or <span style={{...pointsStyle, ...redColorFontStyle}}>{currentPrice.pointsPrice.amount} PTS</span>
                        <div style={wasPriceStyle}>{wasPrice.pointsPrice.amount} PTS</div>
                    </div>
                    <AddToCart />
                </div>
            </> : <>
                <div style={priceWithoutWasPriceStyle}>
                    <div
                        style={currentPriceStyle}>{currentPrice.cashPrice.currencyCode}{currentPrice.cashPrice.amount}</div>
                </div>
                <div style={priceFooterStyle}>
                    <div>
                        Or <span style={pointsStyle}>{currentPrice.pointsPrice.amount} PTS</span>
                    </div>
                    <AddToCart/>
                </div>
            </>
        }

    </>);
};

export default Price;