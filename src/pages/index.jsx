import Head from "next/head";
import { useEffect, useState } from "react";
import { wrapper } from "../app/store";
import Hero from "../components/hero/Hero";
import CategoriesContainer from "../components/categories/CategoriesContainer";
import SectionHeader from "../components/elements/SectionHeader";
import ProductsContainer from "../components/product/ProductsContainer";
import TagProductsContainer from "../components/product/TagProductsContainer";
import NewArrivalProductsContainer from "../components/product/NewArrivalProductsContainer";
import HeaderTop from "../components/HeaderTop";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
    getThemeData,
    getRunningQueriesThunk,
    useGetThemeDataQuery,
    getProductsByCategory,
    useGetProductsByCategoryQuery,
    getTags,
    useGetTagsQuery,
    getProductsByTag,
    useGetProductsByTagQuery,
    productsApi,
} from "../api/apiSlice";

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        await store.dispatch(getThemeData.initiate());
        await store.dispatch(getTags.initiate());
        const { data } = productsApi.endpoints.getThemeData.select()(
            store.getState()
        );
        data.data.theme_info.collectionBox_cqZJao.list.forEach(
            async (category) => {
                await store.dispatch(
                    getProductsByCategory.initiate(category.id)
                );
            }
        );
        data.data.theme_info.tags_7MfPOl.list.forEach(async (tag) => {
            await store.dispatch(getProductsByTag.initiate(tag.id));
        });

        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return {
            props: {},
        };
    }
);

// get products by category
const getProductByCategories = (categories) => {
    const result = {
        categories: [],
        data: {},
    };
    categories.forEach((category) => {
        const { data } = useGetProductsByCategoryQuery(category.id);
        result.categories.push(data.category[0]);
        result.data[data.category[0].id] = data.data;
    });
    return result;
};

// get products by tags
const getProductByTags = (tags) => {
    const result = {};
    tags.forEach((tag) => {
        const { data } = useGetProductsByTagQuery(tag.id);
        result[tag.id] = data.data;
    });
    return result;
};

const Home = () => {
    const [categoryMenuActive, setCategoryMenuActive] = useState(0);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [tagMenuActive, setTagMenuActive] = useState(0);
    const [tagProducts, setTagProducts] = useState([]);
    const { data: themeData } = useGetThemeDataQuery();
    const { data: tags } = useGetTagsQuery();
    const categoriesProduct = getProductByCategories(
        themeData.data.theme_info.collectionBox_cqZJao.list
    );

    // get tag product
    const tagsProduct = getProductByTags(tags.data);
    useEffect(() => {
        setCategoryProducts(
            categoriesProduct.data[categoriesProduct.categories[0].id]
        );
        setTagProducts(tagsProduct[tags.data[1].id]);
    }, []);

    // products by category handler
    const handleCategoryProducts = (id) => {
        setCategoryProducts(categoriesProduct.data[id]);
    };

    // product by tag handler
    const handleTagProducts = (id) => {
        setTagProducts(tagsProduct[id]);
    };

    // get products by new arrival
    const newArrival = tags.data.find((item) => item.title === "NEW ARRIVALS");
    const newArrivalProducts = tagsProduct[newArrival.id];

    return (
        <>
            <Head>
                <title>{themeData.data.seo.meta_title}</title>
                <meta
                    name="description"
                    content={themeData.data.seo.meta_description}
                />
            </Head>
            <HeaderTop headerTopData={themeData.data} />
            <Header headerData={themeData.data} />
            <Hero sliderData={themeData.data.theme_info.slider_g5BCN7} />
            <CategoriesContainer
                categories={themeData.data.theme_info.category_1JXLtF}
            />

            <div className="products-section py-section">
                <div className="container">
                    <SectionHeader />
                    <div className="button-group flex items-center justify-center space-x-5 mb-8">
                        {categoriesProduct.categories.map((category, i) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    handleCategoryProducts(category.id);
                                    setCategoryMenuActive(i);
                                }}
                                type="button"
                                className={`border-2 border-primary capitalize rounded-md text-sm font-bold py-1 px-5 ${
                                    i === categoryMenuActive
                                        ? "bg-primary text-white"
                                        : "text-heading"
                                }`}
                            >
                                {category.text}
                            </button>
                        ))}
                    </div>
                    <ProductsContainer categoryProducts={categoryProducts} />
                </div>
            </div>

            <div className="banner">
                <img
                    src={themeData.data.theme_info.image_osrc9o.url}
                    alt="bookshop banner"
                />
            </div>

            <div className="tags-area py-section">
                <div className="container">
                    <div className="grid grid-cols-12 gap-7">
                        <div className="col-span-12 lg:col-span-3">
                            <div className="border-b pb-3 mb-3">
                                <h3 className="text-normal uppercase font-semibold">
                                    New Arrival
                                </h3>
                            </div>
                            <NewArrivalProductsContainer
                                newArrivalProducts={newArrivalProducts}
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-9">
                            <div className="button-group flex items-center justify-center space-x-1 xs:space-x-5 mb-8 mt-8 lg:mt-0">
                                {tags.data.slice(1).map((tag, i) => (
                                    <button
                                        key={tag.id}
                                        onClick={() => {
                                            handleTagProducts(tag.id);
                                            setTagMenuActive(i);
                                        }}
                                        type="button"
                                        className={`border-2 border-primary capitalize rounded-md text-sm font-bold py-1 px-2 xs:px-5 ${
                                            i === tagMenuActive
                                                ? "bg-primary text-white"
                                                : "text-heading"
                                        }`}
                                    >
                                        {tag.title}
                                    </button>
                                ))}
                            </div>
                            <TagProductsContainer tagProducts={tagProducts} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer footerData={themeData.data} />
        </>
    );
};

export default Home;
