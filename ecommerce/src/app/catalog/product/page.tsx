"use client";

import {
    DragEventHandler,
    MouseEventHandler,
    SyntheticEvent,
    useEffect,
    useState
} from "react";
import ProductPageTemplate from "./page.template";
import {
    ProductPageState,
    ProductPageTabType,
    fetchProduct,
    setCanFetchProduct,
    useAppDispatch,
    useAppSelector
} from "@/lib";
import { notFound, useSearchParams } from "next/navigation";

const ProductPage = () => {
    const searchParams = useSearchParams();
    const alias: string | null = searchParams.get("alias");
    const category: string | null = searchParams.get("category");

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
        complectation,
        shortCharacteristics,
        fullCharacteristics,
        reviews,
        siblings,
        loading,
        text
    } = useAppSelector(ProductPageState);

    const [openedImgLink, setOpenedImgLink] = useState<string | null>(null);
    const [currentTab, setCurrentTab] =
        useState<ProductPageTabType>("allCharasteristics");
    const [canOpenImg, setCanOpenImg] = useState<boolean>(true);

    const handleImgClick: MouseEventHandler<HTMLDivElement> = (event) => {
        console.log("click");
        if (canOpenImg)
            setOpenedImgLink(
                event.currentTarget.getElementsByTagName("img")[0].src
            );
        else setCanOpenImg(true);
    };

    const handleDragStart: DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();
        setCanOpenImg(false);
    };

    const handleDragStop: DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();
        setTimeout(() => setCanOpenImg(true), 300);
    };

    const handleImgClose: (
        event: {},
        reason: "backdropClick" | "escapeKeyDown"
    ) => void = () => {
        setOpenedImgLink(null);
    };

    const handleTabChange: (
        event: SyntheticEvent<Element, Event>,
        value: ProductPageTabType
    ) => void = (_, value) => {
        setCurrentTab(value);
    };

    useEffect(() => {
        dispatch(setCanFetchProduct(true));
        const promise = dispatch(fetchProduct({ alias, category }));
        promise.catch((error) => console.error(error.message));

        return () => {
            promise.abort();
            dispatch(setCanFetchProduct(false));
        };
    }, [alias, category]);

    if (!alias || !category) {
        return notFound();
    }

    return (
        <ProductPageTemplate
            title={title}
            imageLinks={images}
            articul={articul}
            price={price}
            stock={is_available || false}
            characteristics={shortCharacteristics}
            fullCharasterictics={fullCharacteristics}
            description={text}
            complectation={complectation}
            feedback={reviews}
            openedImgLink={openedImgLink}
            onImgClick={handleImgClick}
            onDragStart={handleDragStart}
            onDragStop={handleDragStop}
            onImgClose={handleImgClose}
            currentTab={currentTab}
            onTabChange={handleTabChange}
            simliarProducts={siblings}
            loading={loading}
        />
    );
};

export default ProductPage;
