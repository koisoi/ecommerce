import { Button, ButtonProps } from "@mui/material";
import { MouseEventHandler } from "react";

const BackCallButtonTemplate = ({
    onBackCallButtonClick,
    props,
    altColor
}: {
    onBackCallButtonClick: MouseEventHandler<HTMLButtonElement>;
    props?: ButtonProps;
    altColor?: boolean;
}) => {
    const backCallButtonProps: ButtonProps = {
        variant: "contained",
        color: altColor ? "accent" : "primary",

        onClick: onBackCallButtonClick,

        ...props,

        sx: {
            textTransform: "none",
            boxShadow: "none",
            // textWrap: "nowrap",
            whiteSpace: "nowrap",
            maxWidth: "100%",
            padding: "0.5rem",
            lineHeight: 1,
            fontSize: "1rem",

            ...props?.sx,

            ":hover": {
                boxShadow: "none"
            }
        }
    };

    return <Button {...backCallButtonProps}>Обратный звонок</Button>;
};

export default BackCallButtonTemplate;
