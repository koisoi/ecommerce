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

    const { items } = useAppSelector(CartState);

    const [clearWarningOpen, setClearWarningOpen] = useState<boolean>(false);

    const totalPrice = items
        .reduce<number>((prev, _, i, arr) => {
            return prev + Number(arr[i].price) * arr[i].amount;
        }, 0)
        .toString();

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
                amount: 1
            },
            {
                alias: "lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                title: "iRay LR-1000-1 для серии Rico",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/45957_original.png",
                price: "40000",
                amount: 2
            },
            {
                alias: "iray-ilr-1200-1",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=iray-ilr-1200-1",
                title: "iRay ILR-1200-1 для серии Tube",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/102096_original.webp",
                price: "51000",
                amount: 1
            },
            {
                alias: "lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                title: "iRay LR-1000-1 для серии Rico",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/45957_original.png",
                price: "40000",
                amount: 2
            },
            {
                alias: "iray-ilr-1200-1",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=iray-ilr-1200-1",
                title: "iRay ILR-1200-1 для серии Tube",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/102096_original.webp",
                price: "51000",
                amount: 1
            },
            {
                alias: "lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                title: "iRay LR-1000-1 для серии Rico",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/45957_original.png",
                price: "40000",
                amount: 2
            },
            {
                alias: "iray-ilr-1200-1",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=iray-ilr-1200-1",
                title: "iRay ILR-1200-1 для серии Tube",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/102096_original.webp",
                price: "51000",
                amount: 1
            },
            {
                alias: "lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                url: "http://localhost:3000/catalog/product/?category=TOP.range_finders&series=&product=lazernyy-dalnomer-dlya-pritselov-iray-rico-lrf-1000",
                title: "iRay LR-1000-1 для серии Rico",
                imgLink:
                    "https://telescope1.ru/data/upload/Catalog_Model_Products/45957_original.png",
                price: "40000",
                amount: 2
            }
        ];

        dispatch(setCart(testItems));
    }, []);

    return (
        <CartTableTemplate
            items={items}
            full={full}
            totalPrice={totalPrice}
            clearWarningOpen={clearWarningOpen}
            onClearWarningOpen={handleClearWarningOpen}
            onClearWarningClose={handleClearWarningClose}
            onClear={handleClear}
            onOpenOrderPage={handleOpenOrderPage}
        />
    );
};

export default CartTable;
