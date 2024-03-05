import ProductLink from "@/app/(shared)/text/productLink.template";
import { CategoryItem, getProductImageLink } from "@/lib";
import { getProductLink } from "@/lib/functions/getProductLink";
import {
    ListItem,
    ListItemAvatar,
    ListItemAvatarProps,
    ListItemText,
    ListItemTextProps
} from "@mui/material";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

const SearchPopoverItem = ({
    item,
    onClick
}: {
    item: CategoryItem;
    onClick: (...props: any) => any;
}) => {
    const url: Url = getProductLink(item.category.path, item.alias); /*{
        pathname: "/catalog/product",
        query: {
            category: item.category.path,
            series: item.series?.alias,
            product: item.alias
        }
    }*/

    const linksProps: ListItemAvatarProps & ListItemTextProps = {
        onClick
    };

    const listItemAvatarProps: ListItemAvatarProps = {
        ...linksProps,

        sx: {
            maxWidth: "100px",
            marginRight: "20px"
        }
    };

    return (
        <ListItem divider>
            <ListItemAvatar {...listItemAvatarProps}>
                <Link href={url}>
                    <img
                        alt={item.title}
                        src={getProductImageLink(item.images[0].url)}
                        width="100%"
                    />
                </Link>
            </ListItemAvatar>
            <ListItemText
                {...linksProps}
                primary={<ProductLink url={url}>{item.title}</ProductLink>}
            />
        </ListItem>
    );
};

export default SearchPopoverItem;
