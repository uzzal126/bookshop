import ProductCard from "./ProductCard";

const ProductsContainer = ({ categoryProducts }) => {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
            {categoryProducts?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsContainer;
