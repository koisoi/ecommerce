"use client";

import {
    IconButton,
    IconButtonProps,
    TableCell,
    TableCellProps,
    TableRow,
    TypographyProps
} from "@mui/material";
import { MouseEventHandler } from "react";
import ProductLink from "../../text/productLinkTemplate";
import Price from "../../text/priceTemplate";
import { Close } from "@mui/icons-material";
import DeleteItemDialogTemplate from "../deleteItemDialogTemplate";
import CartImgTemplate, { CartImgProps } from "./cartImgTemplate";
import CartAmountBoxTemplate, {
    AmountBoxProps
} from "./cartAmountBoxTemplate.client";
import { CartItem, useMediaQueries } from "@/lib";

const CartItemTemplate = ({
    item,
    onAmountChange,
    deleteWarningOpen,
    onDelete,
    onDeleteWarningOpen,
    onDeleteWarningClose,
    totalPrice,
    displayOnly,
    columnsTotal
}: {
    item: CartItem;
    onAmountChange: (
        event:
            | React.FocusEvent<HTMLInputElement>
            | React.PointerEvent
            | React.KeyboardEvent,
        value: number | undefined
    ) => void;
    deleteWarningOpen: boolean;
    onDelete: MouseEventHandler<HTMLButtonElement>;
    onDeleteWarningClose: (event: any) => void;
    onDeleteWarningOpen: MouseEventHandler<HTMLButtonElement>;
    totalPrice: string;
    displayOnly?: boolean;
    columnsTotal: number;
}) => {
    const screen = useMediaQueries();

    const titleProps: TypographyProps = {
        fontWeight: "bold",
        fontSize: { xs: "1.3rem", sm: "1rem" },
        flexGrow: 1,
        color: "text.dark"
    };

    const priceProps: TypographyProps = {
        minWidth: { xs: "fit-content", md: "140px" },
        fontWeight: "normal"
    };

    const deleteButtonProps: IconButtonProps = {
        color: "primary",

        onClick: onDeleteWarningOpen,

        sx: {
            alignSelf: "flex-start",
            color: "text.disabled",

            ":hover": {
                color: "primary.main"
            }
        }
    };

    const imgProps: CartImgProps = {
        alt: item.title,
        src: item.imgLink
    };

    const amountBoxProps: AmountBoxProps = {
        amount: item.amount,
        onAmountChange,
        totalPrice,
        displayOnly: displayOnly
    };

    const mobileTitleCellProps: TableCellProps = {
        colSpan: columnsTotal,
        sx: {
            borderBottom: 0,
            paddingTop: "1rem !important"
        }
    };

    const tableCellProps: TableCellProps = {
        sx: {
            paddingBottom: { xs: "1rem !important", sm: "0.5rem !important" }
        }
    };

    const deleteButtonCellProps: TableCellProps = {
        sx: {
            ...tableCellProps.sx,
            textAlign: "right"
        }
    };

    return (
        <>
            {!screen.sm && (
                <TableRow>
                    <TableCell {...mobileTitleCellProps}>
                        <ProductLink url={item.url} props={titleProps}>
                            {item.title}
                        </ProductLink>
                    </TableCell>
                </TableRow>
            )}
            <TableRow>
                {!displayOnly && (
                    <DeleteItemDialogTemplate
                        open={deleteWarningOpen}
                        onDelete={onDelete}
                        onDialogClose={onDeleteWarningClose}
                    />
                )}
                {screen.sm && (
                    <>
                        <TableCell {...tableCellProps}>
                            <CartImgTemplate {...imgProps} />
                        </TableCell>
                        <TableCell {...tableCellProps}>
                            <ProductLink url={item.url} props={titleProps}>
                                {item.title}
                            </ProductLink>
                        </TableCell>
                    </>
                )}
                <TableCell {...tableCellProps}>
                    <Price price={item.price} props={priceProps} />
                </TableCell>
                <TableCell {...tableCellProps}>
                    <CartAmountBoxTemplate {...amountBoxProps} />
                </TableCell>

                {!displayOnly && (
                    <TableCell {...deleteButtonCellProps}>
                        <IconButton {...deleteButtonProps}>
                            <Close />
                        </IconButton>
                    </TableCell>
                )}
            </TableRow>
        </>
    );
};

export default CartItemTemplate;
