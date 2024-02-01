import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    SvgIcon,
    SvgIconProps,
} from "@mui/material";
import FooterTitle from "./title";
import VK from "@/assets/vk.svg";
import { Instagram, YouTube } from "@mui/icons-material";

const SocialNetworksBox = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "5px",
    };

    const buttonsRowProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        gap: "5px",
    };

    const buttonProps: ButtonProps = {
        variant: "contained",
        size: "small",

        sx: {
            minHeight: "38px",
            minWidth: "0",
        },
    };

    const vkButtonProps: ButtonProps = {
        ...buttonProps,
        sx: {
            ...buttonProps.sx,
            backgroundColor: "#4D7198",
            ":hover": {
                backgroundColor: "#4D7198",
            },
        },
    };

    const instagramButtonProps: ButtonProps = {
        ...buttonProps,
        sx: {
            ...buttonProps.sx,
            backgroundImage:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)",
            ":hover": {
                backgroundImage:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)",
            },
        },
    };

    const youtubeButtonProps: ButtonProps = {
        ...buttonProps,
        sx: {
            ...buttonProps.sx,
            backgroundColor: "#F00",
            maxWidth: "40px",
            ":hover": {
                backgroundColor: "#F00",
            },
        },
    };

    const iconProps: SvgIconProps = {
        fontSize: "small",
        sx: {
            color: "white",
        },
    };

    return (
        <Box {...wrapperProps}>
            <FooterTitle>Мы в соц.сетях</FooterTitle>
            <Box {...buttonsRowProps}>
                <Button {...vkButtonProps}>
                    <SvgIcon {...iconProps}>
                        <VK />
                    </SvgIcon>
                </Button>
                <Button {...instagramButtonProps}>
                    <Instagram {...iconProps} />
                </Button>
                <Button {...youtubeButtonProps}>
                    <YouTube />
                </Button>
            </Box>
        </Box>
    );
};

export default SocialNetworksBox;
