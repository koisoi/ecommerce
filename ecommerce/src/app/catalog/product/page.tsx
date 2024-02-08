"use client";

import { MouseEventHandler, SyntheticEvent, useEffect, useState } from "react";
import ProductPageTemplate from "./page.template";
import {
    ProductPageState,
    ProductRequest,
    fetchProduct,
    setCanFetchProduct,
    useAppDispatch,
    useAppSelector
} from "@/lib";

const ProductPage = ({ category, series, alias }: ProductRequest) => {
    const dispatch = useAppDispatch();

    const {
        id,
        articul,
        images,
        title,
        price,
        is_new,
        is_recommend,
        is_available,
        shortCharacteristics,
        fullCharacteristics,
        description,
        feedback,
        simliarProducts,
        loading
    } = useAppSelector(ProductPageState);

    const [openedImgLink, setOpenedImgLink] = useState<string | null>(null);
    const [currentTab, setCurrentTab] = useState<
        "allCharasteristics" | "description" | "feedback"
    >("allCharasteristics");

    const handleImgClick: MouseEventHandler<HTMLImageElement> = (event) => {
        setOpenedImgLink(event.currentTarget.src);
    };

    const handleImgClose: (
        event: {},
        reason: "backdropClick" | "escapeKeyDown"
    ) => void = () => {
        setOpenedImgLink(null);
    };

    const handleTabChange: (
        event: SyntheticEvent<Element, Event>,
        value: "allCharasteristics" | "description" | "feedback"
    ) => void = (_, value) => {
        setCurrentTab(value);
    };

    useEffect(() => {
        dispatch(setCanFetchProduct(true));
        const promise = dispatch(fetchProduct({ category, series, alias }));
        promise.catch((error) => console.error(error.message));

        return () => {
            promise.abort();
            dispatch(setCanFetchProduct(false));
        };
    }, [alias]);

    return (
        <ProductPageTemplate
            title={title}
            imageLinks={images}
            articul={articul}
            price={price}
            stock={is_available || false}
            characteristics={shortCharacteristics}
            fullCharasterictics={fullCharacteristics}
            description={description}
            feedback={feedback || []}
            openedImgLink={openedImgLink}
            onImgClick={handleImgClick}
            onImgClose={handleImgClose}
            currentTab={currentTab}
            onTabChange={handleTabChange}
            simliarProducts={simliarProducts}
            loading={loading}
        />
    );
};

export default ProductPage;
