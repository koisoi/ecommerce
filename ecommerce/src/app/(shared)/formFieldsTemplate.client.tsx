"use client";

import {
    Button,
    ButtonProps,
    TextField,
    TextFieldProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { MuiTelInput, MuiTelInputProps } from "mui-tel-input";
import { MouseEventHandler, ReactNode } from "react";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";

export type InputProps = {
    form: UseFormReturn<any>;
    field: ControllerRenderProps<any, any>;
    props?: TextFieldProps;
};

const inputProps: TextFieldProps & MuiTelInputProps = {
    variant: "outlined",
    sx: {
        flexGrow: 1,
        fieldset: { borderColor: "divider" }
    }
};

export const FullNameInputTemplate = ({ form, field, props }: InputProps) => {
    const fullNameInputProps: TextFieldProps = {
        ...inputProps,
        label: "ФИО",
        required: true,

        error: !!form.formState.errors.fullName,
        helperText: form.formState.errors.fullName?.message as string,

        ...props
    };

    return <TextField {...fullNameInputProps} {...field} />;
};

export const EmailInputTemplate = ({ form, field, props }: InputProps) => {
    const emailInputProps: TextFieldProps = {
        ...inputProps,
        label: "E-mail",
        type: "email",

        error: !!form.formState.errors.email,
        helperText: form.formState.errors.email?.message as string,

        ...props
    };

    return <TextField {...emailInputProps} {...field} />;
};

export const PhoneInputTemplate = ({
    form,
    field,
    props
}: InputProps & { props?: MuiTelInputProps }) => {
    const phoneNumberInputProps: MuiTelInputProps = {
        ...inputProps,
        disableDropdown: true,
        getFlagElement: () => null,
        placeholder: "XXX XXX XX XX",
        label: "Номер телефона",
        required: true,

        error: !!form.formState.errors.phoneNumber,
        helperText: form.formState.errors.phoneNumber?.message as string,
        ...props,

        defaultCountry: "RU",
        forceCallingCode: true,

        inputProps: {
            maxLength: 13
        }
    };

    return <MuiTelInput {...phoneNumberInputProps} {...field} />;
};

export const CommentaryInputTemplate = ({ field, props }: InputProps) => {
    const commentaryInputProps: TextFieldProps = {
        ...inputProps,
        label: "Комментарий",
        multiline: true,
        rows: 4,

        ...props
    };

    return <TextField {...commentaryInputProps} {...field} />;
};

export const FormButton = ({
    children,
    onSubmit,
    props,
    disableRequiredWarning
}: {
    children?: ReactNode;
    onSubmit?: MouseEventHandler<HTMLButtonElement>;
    props?: ButtonProps;
    disableRequiredWarning?: boolean;
}) => {
    const buttonProps: ButtonProps = {
        variant: "contained",
        fullWidth: true,

        onClick: onSubmit,

        ...props,

        sx: {
            textTransform: "none",
            fontSize: "1rem",
            boxShadow: "none",

            ...props?.sx,

            ":hover": {
                boxShadow: "none"
            }
        }
    };

    const smallTextProps: TypographyProps = {
        fontSize: "0.9rem"
    };

    return (
        <>
            {!disableRequiredWarning && (
                <Typography {...smallTextProps}>
                    * - поля, обязательные для заполнения
                </Typography>
            )}
            <Button {...buttonProps}>{children}</Button>
        </>
    );
};
