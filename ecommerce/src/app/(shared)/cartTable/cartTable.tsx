"use client";

import { CartItem } from "@/lib/types/cart";
import CartTableTemplate from "./cartTable.template";
import { MouseEventHandler, useEffect, useState } from "react";
import {
    CartState,
    clearCart,
    setCart,
    useAppDispatch,
    useAppSelector
} from "@/lib";

const CartTable = ({ full }: { full?: boolean }) => {
    const dispatch = useAppDispatch();

    const { items, cartTotal } = useAppSelector(CartState);

    const [clearWarningOpen, setClearWarningOpen] = useState<boolean>(false);

    const handleClearWarningOpen: MouseEventHandler<HTMLButtonElement> = () => {
        setClearWarningOpen(true);
    };

    const handleClearWarningClose: (event: any) => void = () => {
        setClearWarningOpen(false);
    };

    const handleClear: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(clearCart());
        setClearWarningOpen(false);
    };

    //TODO: написать
    const handleOpenOrderPage = () => {};

    useEffect(() => {
        const testItems: CartItem[] = [
            {
                alias: "iray-ilr-1200-1",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=iray-ilr-1200-1",
                title: "iRay ILR-1200-1 для серии Tube",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/102096_original.webp",
                price: "51000",
                amount: 1,
                articul: "test"
            },
            {
                alias: "lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                title: "iRay LR-1000-1 для серии Rico",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/45957_original.png",
                price: "40000",
                amount: 2,
                articul: "test"
            },
            {
                alias: "iray-ilr-1200-12",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=iray-ilr-1200-1",
                title: "iRay ILR-1200-1 для серии Tube",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/102096_original.webp",
                price: "51000",
                amount: 1,
                articul: "test"
            },
            {
                alias: "lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-10003",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                title: "iRay LR-1000-1 для серии Rico",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/45957_original.png",
                price: "40000",
                amount: 2,
                articul: "test"
            },
            {
                alias: "iray-ilr-1200-14",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=iray-ilr-1200-1",
                title: "iRay ILR-1200-1 для серии Tube",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/102096_original.webp",
                price: "51000",
                amount: 1,
                articul: "test"
            },
            {
                alias: "lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-100023423",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                title: "iRay LR-1000-1 для серии Rico",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/45957_original.png",
                price: "40000",
                amount: 2,
                articul: "test"
            },
            {
                alias: "iray-ilr-1200-12344234",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=iray-ilr-1200-1",
                title: "iRay ILR-1200-1 для серии Tube",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/102096_original.webp",
                price: "51000",
                amount: 1,
                articul: "test"
            },
            {
                alias: "lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-10003223",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                title: "iRay LR-1000-1 для серии Rico",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/45957_original.png",
                price: "40000",
                amount: 2,
                articul: "test"
            }
        ];

        dispatch(setCart(testItems));
    }, []);

    return (
        <CartTableTemplate
            items={items}
            full={full}
            totalPrice={cartTotal}
            clearWarningOpen={clearWarningOpen}
            onClearWarningOpen={handleClearWarningOpen}
            onClearWarningClose={handleClearWarningClose}
            onClear={handleClear}
            onOpenOrderPage={handleOpenOrderPage}
        />
    );
};

export default CartTable;
