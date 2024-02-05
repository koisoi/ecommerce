import { ShoppingCart } from "@mui/icons-material";
import { Box, BoxProps, Button, ButtonProps, Fade } from "@mui/material";

const SlidingCartButtonTemplate = ({
    amount,
    visible
}: {
    amount: number;
    visible: boolean;
}) => {
    const slidingCartButtonWrapperProps: ButtonProps = {
        disableRipple: true,
        disableFocusRipple: true,

        sx: {
            display: "inline-flex",
            flexDirection: "row",
            position: "absolute",
            top: "100%",
            right: "10px",
            paddingY: "5px",

            borderRadius: "0 0 0.37rem 0.37rem",

            color: "white",
            fontSize: "1rem",
            lineHeight: 1,

            backgroundColor: "primary.main",
            ":hover": {
                backgroundColor: "primary.dark"
            }
        }
    };

    const amountBadgeProps: BoxProps = {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",

        minWidth: "20px",
        width: "max-content",
        height: "20px",

        fontSize: "0.8rem",
        borderRadius: "100%",

        sx: {
            backgroundColor: "white",
            color: "text.primary"
        }
    };

    // мб лучше использовать Collapse, но он здесь не работает почему-то
    return (
        <Fade in={visible}>
            <Button {...slidingCartButtonWrapperProps}>
                <ShoppingCart />
                <Box {...amountBadgeProps}>{amount}</Box>
            </Button>
        </Fade>
    );
};

export default SlidingCartButtonTemplate;
