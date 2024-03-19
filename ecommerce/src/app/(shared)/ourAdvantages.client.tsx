"use client";

import {
    AddCard,
    CurrencyRuble,
    LocalShippingOutlined
} from "@mui/icons-material";
import {
    Box,
    BoxProps,
    Divider,
    DividerProps,
    SvgIconProps,
    Typography,
    TypographyProps
} from "@mui/material";
import Title from "./text/title";
import { landingConfig, useMediaQueries } from "@/lib";

const OurAdvantages = ({ props }: { props?: BoxProps }) => {
    const screen = useMediaQueries();

    const wrapperProps: BoxProps = {
        ...props,

        padding: "1rem",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 15px 4px rgba(153, 153, 153, 0.2)",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",

        width: "100%",
        boxSizing: "border-box"
    };

    const titleProps: TypographyProps = {
        color: "primary.main",
        maxWidth: "fit-content"
    };

    const descriptionProps: TypographyProps = {
        textAlign: "center",
        padding: "1rem",
        paddingTop: "0",

        color: "text.secondary",
        fontSize: "1rem"
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        gap: "1rem"
    };

    const dividerProps: DividerProps = {
        orientation: screen.md ? "vertical" : "horizontal",
        variant: "middle",
        flexItem: true
    };

    const advantageBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem"
    };

    const advantageTextProps: TypographyProps = {
        color: "text.secondary",
        fontSize: { xs: "1.2rem", md: "0.95rem", mlg: "1.2rem" },
        fontWeight: "bold",
        fontFamily: "inherit",
        textAlign: "center",

        maxWidth: "300px"
    };

    const iconSpanProps = {
        style: {
            fontSize: "5rem"
        }
    };

    const iconProps: SvgIconProps = {
        fontSize: "inherit",
        color: "primary"
    };

    return (
        <Box {...wrapperProps}>
            <Title props={titleProps}>Наши преимущества</Title>
            <Typography {...descriptionProps}>
                {landingConfig.advantages.text}
            </Typography>
            <Box {...innerWrapperProps}>
                <Box {...advantageBoxProps}>
                    <span {...iconSpanProps}>
                        <LocalShippingOutlined {...iconProps} />
                    </span>
                    <Typography {...advantageTextProps}>
                        {landingConfig.advantages.delivery}
                    </Typography>
                </Box>
                <Divider {...dividerProps} />
                <Box {...advantageBoxProps}>
                    <span {...iconSpanProps}>
                        <CurrencyRuble {...iconProps} />
                    </span>
                    <Typography {...advantageTextProps}>
                        {landingConfig.advantages.payment}
                    </Typography>
                </Box>
                <Divider {...dividerProps} />
                <Box {...advantageBoxProps}>
                    <span {...iconSpanProps}>
                        <AddCard {...iconProps} />
                    </span>
                    <Typography {...advantageTextProps}>
                        {landingConfig.advantages.bonuses}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default OurAdvantages;
