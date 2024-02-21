import { Button, ButtonProps } from "@mui/material";
import { MouseEventHandler } from "react";

const BackCallButtonTemplate = ({
    onBackCallButtonClick,
    props
}: {
    onBackCallButtonClick: MouseEventHandler<HTMLButtonElement>;
    props?: ButtonProps;
}) => {
    const backCallButtonProps: ButtonProps = {
        variant: "contained",

        onClick: onBackCallButtonClick,

        ...props,

        sx: {
            textTransform: "none",
            boxShadow: "none",
            textWrap: "nowrap",
            maxWidth: "100%",

            ...props?.sx,

            ":hover": {
                boxShadow: "none"
            }
        }
    };

    return <Button {...backCallButtonProps}>Обратный звонок</Button>;
};

export default BackCallButtonTemplate;
