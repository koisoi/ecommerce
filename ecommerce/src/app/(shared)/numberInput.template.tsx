"use client";

import * as React from "react";
import {
    Unstable_NumberInput as BaseNumberInput,
    NumberInputProps
} from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useThemeColors } from "@/lib";

const NumberInput = ({ ...props }: NumberInputProps | undefined) => {
    const colors = useThemeColors();

    const StyledInput = styled("input")`
        font-size: 0.875rem;
        font-family: inherit;
        font-weight: 400;
        line-height: 1.375;
        color: ${colors.textPrimary};
        border: 1px solid ${colors.divider};
        border-radius: 8px;
        margin: 0 8px;
        padding: 10px 12px;
        outline: 0;
        min-width: 0;
        width: 4rem;
        text-align: center;

        &:hover {
            border-color: ${colors.primary};
        }

        &:focus {
            border-color: ${colors.primary};
        }

        &:focus-visible {
            outline: 0;
        }
    `;

    const StyledInputRoot = styled("div")`
        font-family: "IBM Plex Sans", sans-serif;
        font-weight: 400;
        color: ${colors.textSecondary};
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    `;

    const StyledButton = styled("button")`
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 0.875rem;
        box-sizing: border-box;
        line-height: 1.5;
        border: none;
        border-radius: 999px;
        background: ${colors.divider};
        color: ${colors.textSecondary};
        width: 32px;
        height: 32px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 120ms;

        &:hover {
            cursor: pointer;
            background: ${colors.primary};
            color: white;
        }

        &:focus-visible {
            outline: 0;
        }

        &.increment {
            order: 1;
        }
    `;

    return (
        <BaseNumberInput
            slots={{
                root: StyledInputRoot,
                input: StyledInput,
                incrementButton: StyledButton,
                decrementButton: StyledButton
            }}
            slotProps={{
                incrementButton: {
                    children: <AddIcon fontSize="small" />,
                    className: "increment"
                },
                decrementButton: {
                    children: <RemoveIcon fontSize="small" />
                }
            }}
            {...props}
        />
    );
};

export default NumberInput;
