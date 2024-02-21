"use client";

import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    SvgIcon,
    SvgIconProps
} from "@mui/material";
import FooterTitle from "./title.template";
import VK from "@/assets/svg/vk.svg";
import { Instagram, YouTube } from "@mui/icons-material";

const SocialNetworksBox = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    };

    const buttonsRowProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        gap: "5px"
    };

    const buttonProps: ButtonProps = {
        variant: "contained",
        size: "small",

        sx: {
            minHeight: "38px",
            minWidth: "0"
        }
    };

    const vkButtonProps: ButtonProps = {
        ...buttonProps,
        href: "https://vk.com/telescope1_ru",

        sx: {
            ...buttonProps.sx,
            backgroundColor: "#4D7198",
            ":hover": {
                backgroundColor: "#4D7198"
            }
        }
    };

    const youtubeButtonProps: ButtonProps = {
        ...buttonProps,
        href: "https://www.youtube.com/watch?v=WYgzpw7FaRI",

        sx: {
            ...buttonProps.sx,
            backgroundColor: "#F00",
            maxWidth: "40px",
            ":hover": {
                backgroundColor: "#F00"
            }
        }
    };

    const iconProps: SvgIconProps = {
        fontSize: "small",
        sx: {
            color: "white"
        }
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
                <Button {...youtubeButtonProps}>
                    <YouTube />
                </Button>
            </Box>
        </Box>
    );
};

export default SocialNetworksBox;
