"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import { AppDispatch, AppStore, RootState } from "./store";
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
    useStore
} from "react-redux";
import { theme } from "@/app/theme";

// Вместо стандартных useDispatch и useSelector
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

/**
 * Хук для проверки ширины экрана
 * @returns объект с флагами соответствия брейпоитам
 */
export const useMediaQueries = () => {
    const theme = useTheme();

    const xs = useMediaQuery(theme.breakpoints.up("xs"));
    const xsm = useMediaQuery(theme.breakpoints.up("xsm"));
    const sm = useMediaQuery(theme.breakpoints.up("sm"));
    const smd = useMediaQuery(theme.breakpoints.up("smd"));
    const md = useMediaQuery(theme.breakpoints.up("md"));
    const mlg = useMediaQuery(theme.breakpoints.up("mlg"));
    const lg = useMediaQuery(theme.breakpoints.up("lg"));
    const xlg = useMediaQuery(theme.breakpoints.up("xlg"));
    const xl = useMediaQuery(theme.breakpoints.up("xl"));

    return {
        xs,
        xsm,
        sm,
        smd,
        md,
        mlg,
        lg,
        xlg,
        xl
    };
};

/**
 * Хук для получения значений цвета тем
 * @returns Объект с значениями цвета тем
 */
export const useThemeColors = () => {
    // Основные цвета
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const error = theme.palette.error.main;
    const warning = theme.palette.warning.main;
    const info = theme.palette.info.main;
    const success = theme.palette.success.main;

    // Светлые цвета
    const primaryLight = theme.palette.primary.light;
    const secondaryLight = theme.palette.secondary.light;
    const errorLight = theme.palette.error.light;
    const warningLight = theme.palette.warning.light;
    const infoLight = theme.palette.info.light;
    const successLight = theme.palette.success.light;

    // Темные цвета
    const primaryDark = theme.palette.primary.dark;
    const secondaryDark = theme.palette.secondary.dark;
    const errorDark = theme.palette.error.dark;
    const warningDark = theme.palette.warning.dark;
    const infoDark = theme.palette.info.dark;
    const successDark = theme.palette.success.dark;

    // Фон
    const background = theme.palette.background.default;

    // Разделитель
    const divider = theme.palette.divider;

    // Текст
    const textDisabled = theme.palette.text.disabled;
    const textPrimary = theme.palette.text.primary;
    const textSecondary = theme.palette.text.secondary;

    return {
        primary,
        primaryLight,
        primaryDark,
        secondary,
        secondaryLight,
        secondaryDark,
        error,
        errorLight,
        errorDark,
        warning,
        warningLight,
        warningDark,
        info,
        infoLight,
        infoDark,
        success,
        successLight,
        successDark,
        background,
        divider,
        textDisabled,
        textPrimary,
        textSecondary
    };
};
