import ProductLink from "@/app/(shared)/text/productLinkTemplate";
import { CategoryItem, getLinkDomain, getProductLink } from "@/lib";
import {
    ListItem,
    ListItemAvatar,
    ListItemAvatarProps,
    ListItemText,
    ListItemTextProps
} from "@mui/material";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

const SearchPopoverItemTemplate = ({
    item,
    onClick
}: {
    item: CategoryItem;
    onClick: (...props: any) => any;
}) => {
    const url: Url = getProductLink(item.category.path, item.alias);

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
                        src={getLinkDomain(item.images[0].url)}
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

export default SearchPopoverItemTemplate;
