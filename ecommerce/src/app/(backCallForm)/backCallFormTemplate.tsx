import {
    Box,
    BoxProps,
    DialogContent,
    DialogContentProps,
    DialogProps,
    DialogTitle,
    DialogTitleProps,
    IconButton,
    IconButtonProps,
    Table,
    TableBody,
    TableCell,
    TableRow
} from "@mui/material";
import Title from "../(shared)/text/title.template";
import { Close } from "@mui/icons-material";
import { MouseEventHandler } from "react";
import Paragraph from "../(shared)/text/paragraph.template";
import AttentionText from "../(shared)/text/attentionText.template";
import { Controller, ControllerProps, UseFormReturn } from "react-hook-form";
import { BackCallRules } from "./backCallForm.client";
import {
    CommentaryInput,
    FormButton,
    FullNameInput,
    PhoneInput
} from "../(shared)/formFields.template";
import { AppealForm } from "@/lib";
import Loading from "../(shared)/loading.template";
import ThirdTitle from "../(shared)/text/thirdTitle.template";
import { AppDialog } from "../(shared)";

export const BackCallFormTemplate = ({
    open,
    onClose,
    form,
    rules,
    onSubmit,
    loading,
    postedAppealId,
    appealSendingCompleted
}: {
    open: boolean;
    onClose: MouseEventHandler<HTMLButtonElement>;
    form: UseFormReturn<AppealForm>;
    rules: BackCallRules;
    onSubmit: MouseEventHandler<HTMLButtonElement>;
    loading: boolean;
    postedAppealId: string | null;
    appealSendingCompleted: boolean;
}) => {
    const dialogProps: DialogProps = {
        open
    };

    const dialogTitleProps: DialogTitleProps = {
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    };

    const dialogContentProps: DialogContentProps = {
        sx: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-startts",
            gap: "20px",

            overflowX: "hidden",

            minHeight: "200px",
            minWidth: "200px"
        }
    };

    const iconButtonProps: IconButtonProps = {
        onClick: onClose
    };

    const formBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%"
    };

    const fullNameControllerProps: ControllerProps<AppealForm> = {
        name: "fullName",
        control: form.control,
        rules: rules.fullName,
        render: ({ field }) => <FullNameInput form={form} field={field} />
    };

    const phoneNumberControllerProps: ControllerProps<AppealForm> = {
        name: "phoneNumber",
        control: form.control,
        rules: rules.phoneNumber,
        render: ({ field }) => <PhoneInput form={form} field={field} />
    };

    const questionControllerProps: ControllerProps<AppealForm> = {
        name: "question",
        control: form.control,
        rules: rules.question,
        render: ({ field }) => (
            <CommentaryInput
                form={form}
                field={field}
                props={{
                    label: "Ваш вопрос",
                    required: true,

                    error: !!form.formState.errors.question,
                    helperText: form.formState.errors.question?.message
                }}
            />
        )
    };

    const thanksForAppealBoxProps: BoxProps = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexDirection: "column",

        paddingBottom: "20px"
    };

    return (
        <AppDialog props={dialogProps}>
            <DialogTitle {...dialogTitleProps}>
                <Title>Обратный звонок</Title>

                <IconButton {...iconButtonProps}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent {...dialogContentProps}>
                {!appealSendingCompleted && !postedAppealId && !loading && (
                    <>
                        <Paragraph>
                            Менеджер магазина перезвонит по указанному телефону
                            в рабочее время
                        </Paragraph>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Paragraph>Рабочие дни</Paragraph>
                                    </TableCell>
                                    <TableCell>
                                        <AttentionText>
                                            10:00 - 19:00
                                        </AttentionText>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Paragraph>Суббота</Paragraph>
                                    </TableCell>
                                    <TableCell>
                                        <AttentionText>
                                            10:00 - 17:00
                                        </AttentionText>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Paragraph>Воскресенье</Paragraph>
                                    </TableCell>
                                    <TableCell>
                                        <AttentionText>выходной</AttentionText>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                        <Box {...formBoxProps}>
                            <Controller {...fullNameControllerProps} />
                            <Controller {...phoneNumberControllerProps} />
                            <Controller {...questionControllerProps} />
                            <FormButton onSubmit={onSubmit}>
                                Отправить
                            </FormButton>
                        </Box>
                    </>
                )}

                {loading && <Loading>Отправка...</Loading>}

                {appealSendingCompleted && postedAppealId && (
                    <Box {...thanksForAppealBoxProps}>
                        <ThirdTitle>Спасибо за обращение!</ThirdTitle>
                        <Paragraph>
                            Номер вашего обращения:{" "}
                            <AttentionText inline>
                                {postedAppealId}
                            </AttentionText>
                            . Ожидайте звонка оператора.
                        </Paragraph>
                    </Box>
                )}
            </DialogContent>
        </AppDialog>
    );
};

// export default BackCallFormTemplate;
