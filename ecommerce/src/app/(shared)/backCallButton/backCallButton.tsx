"use client";

import { openBackCallModal, useAppDispatch } from "@/lib";
import BackCallButtonTemplate from "./backCallButton.template";
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
