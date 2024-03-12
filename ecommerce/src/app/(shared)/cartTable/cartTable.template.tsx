"use client";

import { CartItem } from "@/lib/types/cart";
import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Divider,
    Table,
    TableBody,
    TableBodyProps,
    TableCell,
    TableCellProps,
    TableFooter,
    TableFooterProps,
    TableHead,
    TableHeadProps,
    TableProps,
    TableRow,
    Typography,
    TypographyProps
} from "@mui/material";
import CartItemComponent from "./cartItem/cartItem";
import Price from "../text/price.template";
import { Delete } from "@mui/icons-material";
import { MouseEventHandler } from "react";
import ClearDialog from "./clearDialog.template";
import { useMediaQueries } from "@/lib";
import EmptyCart from "./emptyCart/emptyCart";

export type CartTableTemplateProps = {
    items: CartItem[];
    full?: boolean;
    totalPrice: string;
    clearWarningOpen?: boolean;
    displayOnly?: boolean;
    onClearWarningOpen?: MouseEventHandler<HTMLButtonElement>;
    onClearWarningClose?: (event: any) => void;
    onClear?: MouseEventHandler<HTMLButtonElement>;
    onOpenOrderPage?: MouseEventHandler<HTMLButtonElement>;
};

const CartTableTemplate = ({
    items,
    full,
    totalPrice,
    clearWarningOpen,
    displayOnly,
    onClearWarningOpen,
    onClearWarningClose,
    onClear,
    onOpenOrderPage
}: CartTableTemplateProps) => {
    const screen = useMediaQueries();

    const wrapperProps: TableProps = {
        width: "100%",
        sx: {
            tableLayout: "fixed"
        }
    };

    // const headerProps: TableHeadProps = {
    //     sx: {
    //         // padding: "10px",
    //         width: "100%",

    //         // display: "flex",
    //         // flexDirection: "row",
    //         // gap: "20px"
    //     }
    // };

    const footerProps: TableCellProps = {
        colSpan: displayOnly ? 4 : 5
    };

    const footerWrapperProps: BoxProps = {
        display: "flex",
        padding: "2rem",
        justifyContent: displayOnly ? "flex-end" : "space-between",
        alignItems: "center",
        width: "100%"
    };

    const footerTextProps: TypographyProps = {
        color: "text.disabled",

        display: "inline-flex",
        alignItems: "center",
        gap: "10px",

        paddingRight: "8px"
    };

    const footerPriceProps: TypographyProps = {
        color: "text.primary"
    };

    const clearButtonProps: ButtonProps = {
        variant: "text",

        onClick: onClearWarningOpen,

        sx: {
            textTransform: "none",
            fontSize: "inherit",

            display: "flex",
            flexDirection: "row",
            gap: "5px",
            justifyContent: "center",

            color: "text.disabled",

            ":hover": {
                color: "primary.main"
            }
        }
    };

    const orderButtonProps: ButtonProps = {
        variant: "contained",

        onClick: onOpenOrderPage,

        sx: {
            textTransform: "none",
            fontSize: "inherit",

            boxShadow: "none",

            ":hover": {
                boxShadow: "none"
            }
        }
    };

    const tableHeadProps: TableHeadProps = {
        color: "text.disabled"
    };

    if (!items.length) return <EmptyCart full={full} />;

    return (
        <>
            {!displayOnly && (
                <ClearDialog
                    open={!!clearWarningOpen}
                    onClear={onClear}
                    onDialogClose={onClearWarningClose}
                />
            )}

            <Table {...wrapperProps}>
                <colgroup>
                    <col width={100} />
                    <col />
                    <col width={140} />
                    <col width={200} />
                    {!displayOnly && <col width={100} />}
                </colgroup>
                {full && screen.md && (
                    <TableHead {...tableHeadProps}>
                        <TableRow>
                            <TableCell />
                            <TableCell>Наименование</TableCell>
                            <TableCell>Цена</TableCell>
                            <TableCell>Количество</TableCell>
                            {!displayOnly && <TableCell />}
                        </TableRow>
                    </TableHead>
                )}
                <TableBody>
                    {items.map((item, i, array) => (
                        <CartItemComponent
                            key={item.alias}
                            item={item}
                            displayOnly={displayOnly}
                        ></CartItemComponent>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell {...footerProps}>
                            <Box {...footerWrapperProps}>
                                {!displayOnly && (
                                    <Button {...clearButtonProps}>
                                        <Delete />{" "}
                                        {screen.xsm && "Очистить корзину"}
                                    </Button>
                                )}
                                {!full && !displayOnly && (
                                    <Button {...orderButtonProps}>
                                        Оформить заказ
                                    </Button>
                                )}
                                <Typography {...footerTextProps}>
                                    Итого:
                                    <Price
                                        price={totalPrice}
                                        variant={
                                            screen.sm
                                                ? full
                                                    ? "large"
                                                    : "medium"
                                                : "medium"
                                        }
                                        props={footerPriceProps}
                                    />
                                </Typography>
                            </Box>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </>
    );
};

export default CartTableTemplate;
