import { Box, BoxProps } from "@mui/material";
import Image, { ImageProps } from "next/image";

const HeaderMainContainer = () => {
    const wrapperProps: BoxProps = {
        paddingY: "2rem",
        // paddingX: "10px",
        marginX: "auto",

        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", lg: "row" },

        width: "100%",
        maxWidth: "1320px",
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        gap: "30px",
    };

    const logoProps: ImageProps = {
        src: "/logotype.png",
        alt: "Логотип",
        width: 180,
        height: 45,
        sizes: "100vw",

        // style: {
        //     maxWidth: "90%",
        //     maxHeight: "100px",
        // },
    };

    const contactsBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
    };

    return (
        <Box {...wrapperProps}>
            <Box {...innerWrapperProps}>
                <Image {...logoProps} />
                <Box {...contactsBoxProps}>
                    <a
                        href="tel:88009870011"
                        style={{
                            color: "#3167eb",
                            fontWeight: "bold",
                            textDecoration: "none",
                        }}
                    >
                        8-800-987-00-11
                    </a>
                    <a
                        style={{
                            color: "#969696",
                            textDecoration: "none",
                        }}
                        href="mailto:test@test.ru"
                    >
                        test@test.ru
                    </a>
                </Box>
            </Box>
            <Box {...innerWrapperProps}></Box>
        </Box>
    );
};

export default HeaderMainContainer;
