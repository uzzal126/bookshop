import Slider from "react-slick";
import NewProductCard from "./NewProductCard";
import "slick-carousel/slick/slick.css";

const NewArrivalProductsContainer = ({ newArrivalProducts }) => {
    const settings = {
        infinite: true,
        speed: 500,
        rows: 3,
        slidesPerRow: 1,
    };

    return (
        <Slider {...settings}>
            {newArrivalProducts.map((product) => (
                <NewProductCard key={product.id} product={product} />
            ))}
        </Slider>
    );
};

export default NewArrivalProductsContainer;
