import {
    Card,
    CardContent,
    CardMedia,
    Link as MUILink,
    LinkProps,
    CardActions,
    ButtonProps,
    Button,
    CardActionsProps,
    Typography,
} from "@mui/material";
import Link from "next/link";

const ProductCard = ({
    imageLink,
    title,
    productLink,
}: {
    imageLink: string;
    title: string;
    productLink: string;
}) => {
    const titleProps: LinkProps = {
        fontSize: "15px",
        color: "text.primary",

        sx: {
            textDecoration: "none",

            ":hover": {
                color: "primary.main",
            },
        },
    };

    const buttonProps: ButtonProps = {
        size: "small",
        variant: "outlined",
        color: "primary",
    };

    const actionRow: CardActionsProps = {
        sx: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
    };

    return (
        <Card
            sx={{
                maxWidth: "330px",
                minHeight: "410px",
            }}
        >
            <CardMedia
                sx={{ height: "310px" }}
                image={imageLink}
                title={title}
            />
            <CardContent>
                <Link href={productLink} style={{ textDecoration: "none" }}>
                    <MUILink {...titleProps}>{title}</MUILink>
                </Link>
            </CardContent>
            <CardActions>
                <Typography fontWeight="bold">43 €</Typography>
                <Button {...buttonProps}></Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
