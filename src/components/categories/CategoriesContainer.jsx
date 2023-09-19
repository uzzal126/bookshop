import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "./CategoryCard";

const CategoriesContainer = ({ categories }) => {
    const categoryCarouselSettings = {
        slidesPerView: 4,
        spaceBetween: 20,
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
        },
    };
    return (
        <div className="categories-wrapper">
            <div className="container-fluid bg-[#f1f5f4] mx-5 p-5">
                <Swiper {...categoryCarouselSettings}>
                    {categories.list.map((category) => (
                        <SwiperSlide key={category.id}>
                            <CategoryCard category={category} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CategoriesContainer;
