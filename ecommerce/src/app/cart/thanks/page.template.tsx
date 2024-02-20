import PageTitle from "@/app/(shared)/text/pageTitle.template";
import { Box, BoxProps } from "@mui/material";
import CompletedOrderFormTemplate, {
    CompletedOrderFormProps
} from "./completedOrderForm.template";
import CartTableTemplate, {
    CartTableTemplateProps
} from "@/app/(shared)/cartTable/cartTable.template";

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
        // width: "100%",
        flexGrow: 1
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
            <PageTitle>Спасибо за заказ!</PageTitle>
            <Box {...wrapperProps}>
                <Box {...leftBoxProps}>
                    <CartTableTemplate {...cartTableProps} />
                </Box>
                <CompletedOrderFormTemplate {...orderFormProps} />
            </Box>
        </>
    );
};

export default ThanksForOrderPageTemplate;
