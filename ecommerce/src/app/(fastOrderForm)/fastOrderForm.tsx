import {
    CategoryItem,
    OrderForm,
    emailPattern,
    requiredRule,
    setOrderLoading,
    useAppDispatch
} from "@/lib";
import FastOrderFormTemplate from "./fastOrderForm.template";
import { useForm } from "react-hook-form";
import { OrderRules } from "../cart/page";
import { matchIsValidTel } from "mui-tel-input";

const FastOrderForm = ({ item }: { item?: CategoryItem }) => {
    const dispatch = useAppDispatch();

    const form = useForm<OrderForm>({
        values: {
            fullName: "",
            email: "",
            phoneNumber: "",
            commentary: ""
        }
    });

    const formValidation: OrderRules = {
        fullName: { required: requiredRule },
        email: {
            pattern: emailPattern
        },
        phoneNumber: {
            required: requiredRule,
            validate: (value: string) => {
                return (
                    matchIsValidTel(value, { onlyCountries: ["RU"] }) ||
                    "Неверный формат номера телефона"
                );
            }
        }
    };

    const handleSubmit = (data: OrderForm) => {
        data.phoneNumber = data.phoneNumber.replace(/\D/g, "");
        console.log(data);
        dispatch(setOrderLoading(true));
        setTimeout(() => dispatch(setOrderLoading(false)), 2000);
    };

    return (
        <FastOrderFormTemplate
            item={item}
            rules={formValidation}
            form={form}
            onSubmit={form.handleSubmit(handleSubmit)}
        />
    );
};

export default FastOrderForm;
