import Link from "next/link";
import { BsEye } from "react-icons/bs";

const ProductCardStyleTwo = ({ product }) => {
    return (
        <div className="group border">
            <div className="relative">
                <Link href={product.slug}>
                    <img
                        src={
                            product.thumbnail.src
                                ? product.thumbnail.src
                                : product.gallery[0].src
                        }
                        alt={product.name}
                    />
                </Link>
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <button
                        type="button"
                        className="bg-primary text-white text-lg w-10 h-10 leading-none rounded-full text-center hover:bg-white hover:text-primary transition-all"
                    >
                        <BsEye className="inline-block" />
                    </button>
                </div>
                <div className="absolute left-0 right-0 text-center bottom-3 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <button
                        type="button"
                        className="text-sm bg-white text-primary px-6 py-1 rounded-full hover:bg-primary hover:text-white"
                        title="add to cart"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
            <div className="px-2.5 py-3 text-center">
                <h4 className="text-normal font-medium capitalize text-[#777]">
                    <Link href={product.slug}>{product.name}</Link>
                </h4>
                <span className="text-lg font-semibold text-primary mt-2 block">
                    ${product.price.base_sale}
                </span>
            </div>
        </div>
    );
};

export default ProductCardStyleTwo;
