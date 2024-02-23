import { useForm } from "react-hook-form";
import BackCallFormTemplate from "./backCallForm.template";
import {
    AppealForm,
    RulesType,
    requiredRule,
    ruPhoneValidator,
    useAppDispatch,
    useAppSelector
} from "@/lib";
import { MouseEventHandler, useEffect, useState } from "react";
import { PayloadAction } from "@reduxjs/toolkit";
import {
    BackCallState,
    authorizeAppeal,
    postAppeal,
    postAppealStatistics,
    resetAppeal
} from "@/lib/slices/backCall.slice";
import { GlobalState } from "@/lib/slices/global.slice";

export type BackCallRules = {
    fullName: RulesType;
    phoneNumber: RulesType;
    question: RulesType;
};

const BackCallForm = ({
    open,
    onClose
}: {
    open: boolean;
    onClose: MouseEventHandler<HTMLButtonElement>;
}) => {
    const dispatch = useAppDispatch();
    const { utm, ip, referrer, start_url } = useAppSelector(GlobalState);
    const { loading, postedAppealId, appealSendingCompleted } =
        useAppSelector(BackCallState);

    const [currentPromise, setCurrentPromise] = useState<Promise<
        PayloadAction<any>
    > | null>(null);

    const form = useForm<AppealForm>({
        values: {
            fullName: "",
            phoneNumber: "",
            question: ""
        }
    });

    const formValidation: BackCallRules = {
        fullName: { required: requiredRule },
        phoneNumber: {
            required: requiredRule,
            validate: ruPhoneValidator
        },
        question: {
            required: requiredRule
        }
    };

    const handleSubmit = (data: AppealForm) => {
        data.phoneNumber = data.phoneNumber.replace(/\D/g, "");

        const authPromise = dispatch(authorizeAppeal());
        setCurrentPromise(authPromise);
        authPromise
            .unwrap()
            .then(() => {
                const orderPromise = dispatch(postAppeal(data));
                setCurrentPromise(orderPromise);
                orderPromise.unwrap().then((val): any => {
                    if (!val?.appeal.id || val?.status != "ok")
                        throw new Error(
                            "Something went wrong while sending order. Server didn't respond with OK status."
                        );

                    const statisticsPromise = dispatch(
                        postAppealStatistics({
                            parent_id: val.appeal.id,
                            ip,
                            referer: referrer,
                            start_url,
                            utm
                        })
                    );
                    setCurrentPromise(statisticsPromise);

                    statisticsPromise.unwrap().then((val) => {
                        if (val?.status != "ok")
                            throw new Error(
                                "Something went wrong while sending statistics. Server didn't respond with OK status."
                            );
                    });
                });
            })
            .catch((error) => console.error(error.message));
    };

    const handleClose: MouseEventHandler<HTMLButtonElement> = (e) => {
        onClose(e);
        // @ts-ignore
        if (currentPromise) currentPromise.abort();
        dispatch(resetAppeal());
    };

    return (
        <BackCallFormTemplate
            open={open}
            onClose={handleClose}
            form={form}
            rules={formValidation}
            onSubmit={form.handleSubmit(handleSubmit)}
            loading={loading}
            postedAppealId={postedAppealId}
            appealSendingCompleted={appealSendingCompleted}
        />
    );
};

export default BackCallForm;