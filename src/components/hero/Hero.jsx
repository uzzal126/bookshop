import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = ({ sliderData }) => {
    const settings = {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
    };
    return (
        <div className="hero-slider">
            <div className="relative group-hover:opacity-100 group">
                <Swiper {...settings}>
                    {sliderData.list.map((item) => (
                        <SwiperSlide key={item.banner_url}>
                            <Link href="/">
                                <div
                                    className="bg-cover bg-center bg-no-repeat h-[435px] flex justify-center items-center"
                                    style={{
                                        backgroundImage: `url('${item.banner_url}')`,
                                    }}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Hero;
