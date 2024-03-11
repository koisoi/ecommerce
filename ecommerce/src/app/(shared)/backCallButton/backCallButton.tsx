"use client";

import { useAppDispatch } from "@/lib";
import BackCallButtonTemplate from "./backCallButton.template";
import { openBackCallModal } from "@/lib/slices/backCall.slice";
import { ButtonProps } from "@mui/material";

const BackCallButton = ({
    props,
    altColor
}: {
    props?: ButtonProps;
    altColor?: boolean;
}) => {
    const dispatch = useAppDispatch();

    const handleBackCallButtonClick = () => {
        dispatch(openBackCallModal());
    };

    return (
        <BackCallButtonTemplate
            onBackCallButtonClick={handleBackCallButtonClick}
            props={props}
            altColor={altColor}
        />
    );
};

export default BackCallButton;
