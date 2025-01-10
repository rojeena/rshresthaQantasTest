import Title from "../title";
import Image from "../image";
import Price from "../price";

const productTileStyle = {
    position: "relative",
    height: 400,
    padding: 20,
    background: "#fafafa",
    fontSize: 14,
    marginRight: 12,
    maxWidth: 280,
    borderRadius: 4,
};

const ProductTile = ({ product }) => (
    <div style={productTileStyle}>
        <Title
            isSale={product.tag === "sale"}
            name={product.name}
            description={product.description}
        />

        <Image
            src={product.image}
            alt={product.name}
        />

        <Price
            currentPrice={product.currentPrice}
            wasPrice={product.wasPrice}
        />
    </div>
);

export default ProductTile;