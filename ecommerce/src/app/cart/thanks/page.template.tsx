import PageTitle from "@/app/(shared)/text/pageTitle";
import { Box, BoxProps } from "@mui/material";
import CompletedOrderFormTemplate, {
    CompletedOrderFormProps
} from "./completedOrderForm.template";
import CartTableTemplate, {
    CartTableTemplateProps
} from "@/app/(shared)/cartTable/cartTableTemplate.client";
import BreadcrumbsTemplate from "@/app/(shared)/breadcrumbsTemplate";
import { thanksForOrderBreadcrumbs } from "@/lib";

const ThanksForOrderPageTemplate = ({
    fullName,
    email,
    phone,
    commentary,
    orderId,
    items,
    totalPrice
}: CompletedOrderFormProps & CartTableTemplateProps) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: "20px"
    };

    const leftBoxProps: BoxProps = {
        flexGrow: 1
    };

    const rightBoxProps: BoxProps = {
        minWidth: { xs: "100%", sm: "370px" }
    };

    const orderFormProps: CompletedOrderFormProps = {
        fullName,
        email,
        phone,
        commentary,
        orderId
    };

    const cartTableProps: CartTableTemplateProps = {
        items,
        totalPrice,
        full: true,
        displayOnly: true
    };

    return (
        <>
            <BreadcrumbsTemplate linksArray={thanksForOrderBreadcrumbs} />
            <PageTitle>Спасибо за заказ!</PageTitle>
            <Box {...wrapperProps}>
                <Box {...leftBoxProps}>
                    <CartTableTemplate {...cartTableProps} />
                </Box>
                <Box {...rightBoxProps}>
                    <CompletedOrderFormTemplate {...orderFormProps} />
                </Box>
            </Box>
        </>
    );
};

export default ThanksForOrderPageTemplate;
