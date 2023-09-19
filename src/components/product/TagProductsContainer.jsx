import { Swiper, SwiperSlide } from "swiper/react";
import ProductCardStyleTwo from "./ProductCardStyleTwo";

const TagProductsContainer = ({ tagProducts }) => {
    const settings = {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        },
    };

    return (
        <div className="">
            <Swiper {...settings}>
                {tagProducts?.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCardStyleTwo product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TagProductsContainer;
