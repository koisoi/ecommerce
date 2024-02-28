"use client";

import { useAppDispatch, useAppSelector } from "@/lib";
import HomeTemplate from "./page.template";
import { GlobalState } from "@/lib/slices/global.slice";
import {
    HomePageState,
    fetchLastReviews,
    fetchPopularProducts,
    setPopularProductsLoading,
    setReviewsLoading
} from "@/lib/slices/homePage.slice";
import { useEffect } from "react";
import { landingConfig } from "./config";

const Home = () => {
    const dispatch = useAppDispatch();

    const frameLinks = [
        "https://telescope1.ru/img/banners/pulsar-telos-lrf-xp50/index.html",
        "https://telescope1.ru/img/banners/nikon-sale/index.html",
        "https://telescope1.ru/img/banners/club-price-auth/index.html",
        "https://telescope1.ru/img/banners/vector-optics/index.html",
        "https://telescope1.ru/img/banners/delivery/index.html"
    ];

    const { reviews, reviewsLoading, popularProducts, popularProductsLoading } =
        useAppSelector(HomePageState);

    useEffect(() => {
        const productsPromise = dispatch(fetchPopularProducts());
        const reviewsPromise = dispatch(fetchLastReviews());

        productsPromise.unwrap().catch((error) => console.error(error));
        reviewsPromise.unwrap().catch((error) => console.error(error));

        return () => {
            productsPromise.abort();
            reviewsPromise.abort();
            dispatch(setPopularProductsLoading(false));
            dispatch(setReviewsLoading(false));
        };
    }, []);

    return (
        <HomeTemplate
            frameLinks={frameLinks}
            categories={landingConfig.categories}
            popularProducts={popularProducts}
            popularProductsLoading={popularProductsLoading}
            reviews={reviews}
            reviewsLoading={reviewsLoading}
        />
    );
};

export default Home;
