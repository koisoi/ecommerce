import { formatPhoneNumber } from "@/lib";
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

        color: "primary.main",
        ...props,

        sx: {
            fontWeight: "bold",
            textDecoration: "none",
            whiteSpace: "nowrap",

            ...props?.sx
        }
    };

    return <Link {...linkProps}>{formatPhoneNumber(number)}</Link>;
};

export default PhoneLink;
