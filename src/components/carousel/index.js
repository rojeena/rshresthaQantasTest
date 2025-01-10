import { PRODUCTS_DATA } from "../../constants";
import ProductTile from "../productTile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    };

    return (
        <div style={{
            padding: 80,
            fontFamily: "sans-serif",
        }}>
            <Slider {...settings}>
                {
                    PRODUCTS_DATA.data.search?.products?.length &&
                    PRODUCTS_DATA.data.search?.products.map((product) => (
                        <ProductTile product={product} />
                    ))
                }
            </Slider>
        </div>
    )
};

export default Carousel;
