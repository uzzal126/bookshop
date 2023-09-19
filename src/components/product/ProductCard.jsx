import Link from "next/link";
import { BsCart2, BsEye } from "react-icons/bs";

const ProductCard = ({ product }) => {
    return (
        <div className="group">
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
                <div className="absolute right-4 bottom-4 flex flex-col space-y-2 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <button
                        type="button"
                        className="bg-white border text-primary text-lg w-10 h-10 leading-none rounded-full text-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                        <BsCart2 className="inline-block" />
                    </button>
                    <button
                        type="button"
                        className="bg-white border text-primary text-lg w-10 h-10 leading-none rounded-full text-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                        <BsEye className="inline-block" />
                    </button>
                </div>
            </div>
            <div className="px-5 pt-5 text-center">
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

export default ProductCard;
