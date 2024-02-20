import { DragEventHandler, MouseEventHandler, useState } from "react";
import ProductPageUpperBoxTemplate from "./productPageUpperBox.template";
import {
    ProductPageState,
    getProductImageLink,
    setOpenedImgLink,
    useAppDispatch,
    useAppSelector
} from "@/lib";

const ProductPageUpperBox = () => {
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
        loading,
        alias,
        category,
        series
    } = useAppSelector(ProductPageState);

    const [canOpenImg, setCanOpenImg] = useState<boolean>(true);

    const handleImgClick: MouseEventHandler<HTMLDivElement> = (event) => {
        if (canOpenImg)
            dispatch(
                setOpenedImgLink(
                    event.currentTarget.getElementsByTagName("img")[0].src
                )
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

    return (
        <ProductPageUpperBoxTemplate
            imageLinks={images.map((el) => ({
                id: el.id,
                url: getProductImageLink(el.url)
            }))}
            stock={is_available || false}
            characteristics={shortCharacteristics}
            cartItem={{
                url: {
                    pathname: "/catalog/product",
                    query: {
                        category: category.path,
                        series: series?.alias,
                        product: alias
                    }
                },
                alias,
                title,
                imgLink: getProductImageLink(images[0].url),
                price,
                amount: 1,
                articul
            }}
            onImgClick={handleImgClick}
            onDragStart={handleDragStart}
            onDragStop={handleDragStop}
            categoryItem={{
                id,
                articul,
                images,
                title,
                price,
                alias,
                is_new,
                is_recommend,
                category
            }}
        />
    );
};

export default ProductPageUpperBox;
