import { DragEventHandler, MouseEventHandler, useState } from "react";
import ProductPageUpperBoxTemplate from "./productPageUpperBox.template";
import {
    ProductPageState,
    setOpenedImgLink,
    useAppDispatch,
    useAppSelector
} from "@/lib";

const ProductPageUpperBox = () => {
    const dispatch = useAppDispatch();

    const {
        articul,
        images,
        title,
        price,
        is_new,
        is_recommend,
        is_available,
        shortCharacteristics,
        loading
    } = useAppSelector(ProductPageState);

    const [canOpenImg, setCanOpenImg] = useState<boolean>(true);

    const handleImgClick: MouseEventHandler<HTMLDivElement> = (event) => {
        console.log("click");
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
            title={title}
            imageLinks={images}
            articul={articul}
            price={price}
            stock={is_available || false}
            characteristics={shortCharacteristics}
            onImgClick={handleImgClick}
            onDragStart={handleDragStart}
            onDragStop={handleDragStop}
        />
    );
};

export default ProductPageUpperBox;
