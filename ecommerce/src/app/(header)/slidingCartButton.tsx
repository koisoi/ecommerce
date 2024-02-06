import SlidingCartButtonTemplate from "./slidingCartButton.template";
import { useMediaQueries } from "../../lib/hooks";
import { useEffect, useState } from "react";

const SlidingCartButton = () => {
    const screen = useMediaQueries();

    // amount буду получать из redux
    const [amount, setAmount] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);

    // TODO: не показывать на мобилках
    const toggleVisible = () => {
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
