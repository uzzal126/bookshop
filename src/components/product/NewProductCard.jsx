import Link from "next/link";

const NewProductCard = ({ product }) => {
    return (
        <div className="group flex items-center mb-8">
            <div className="relative w-[135px] h-[130px] flex-shrink-0 flex-grow-0">
                <Link href={product.slug}>
                    <img
                        src={
                            product.thumbnail.src
                                ? product.thumbnail.src
                                : product.gallery[0].src
                        }
                        alt={product.name}
                        className=" object-cover"
                    />
                </Link>
            </div>
            <div className="ps-4">
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

export default NewProductCard;
