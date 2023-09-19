import Link from "next/link";

const CategoryCard = ({ category }) => {
    return (
        <div className="group">
            <div className="relative overflow-hidden">
                <img
                    src={category.thumb}
                    alt={category.name}
                    className="transition-all group-hover:scale-110"
                />
                <h3 className="text-2xl leading-none font-extrabold uppercase text-heading absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-primary transition-all">
                    <Link href={category.url} className="bg-white px-7 py-4">
                        {category.name}
                    </Link>
                </h3>
            </div>
        </div>
    );
};

export default CategoryCard;
