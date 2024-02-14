"use client";

import { useMediaQueries } from "@/lib";
import SlidingCartButtonTemplate from "./slidingCartButton.template";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SlidingCartButton = () => {
    const screen = useMediaQueries();
    const path = usePathname();
    // amount буду получать из redux
    const [amount, setAmount] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);

    // TODO: не показывать на мобилках
    const toggleVisible = () => {
        if (!screen.md || path === "/cart" || path === "/cart/") {
            setVisible(false);
            return;
        }
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500) {
            setVisible(true);
        } else if (scrolled <= 500) {
            setVisible(false);
        }
    };

    window.addEventListener("scroll", toggleVisible);

    useEffect(() => {
        return window.removeEventListener("scroll", toggleVisible);
    });

    return <SlidingCartButtonTemplate amount={amount} visible={visible} />;
};

export default SlidingCartButton;
