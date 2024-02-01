import { Link as MUILink } from "@mui/material";
import Link from "next/link";

const FooterLink = ({
    children,
    href,
}: {
    children: React.ReactNode;
    href: string;
}) => {
    return (
        <Link href={href} style={{ textDecoration: "none" }}>
            <MUILink
                color="text.secondary"
                fontSize="15px"
                sx={{
                    textDecoration: "none",
                    display: "inline-flex",
                    flexDirection: "row",
                    alignContent: "center",

                    ":hover": {
                        color: "primary.main",
                    },
                }}
            >
                {children}
            </MUILink>
        </Link>
    );
};

export default FooterLink;
