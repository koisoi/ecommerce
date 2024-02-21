import { Link, LinkProps } from "@mui/material";

const PhoneLink = ({
    number,
    props
}: {
    number: string;
    props?: LinkProps;
}) => {
    const linkProps: LinkProps = {
        href: `tel:${number}`,

        ...props,

        sx: {
            color: "primary.main",
            fontWeight: "bold",
            textDecoration: "none",

            ...props?.sx
        }
    };

    return (
        <Link {...linkProps}>
            {number
                .slice(number[0] === "+" ? 2 : 1)
                .replace(
                    /(\d{3})(\d{3})(\d{2})(\d{2})/g,
                    `${number[0] === "+" ? "+7" : "8"} ($1) $2 $3 $4`
                )}
        </Link>
    );
};

export default PhoneLink;
