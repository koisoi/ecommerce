"use client";

import { matchIsValidTel } from "mui-tel-input";

/**
 *  Объект валидации обязательного заполнения
 */
export const requiredRule: string = "Обязательное поле";

/**
 * Объект валидации email-адреса
 */
export const emailPattern: {
    value: RegExp;
    message: string;
} = {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: "Неверный формат почты"
};

/**
 * Объект валидации номера телефона
 */
export const ruPhoneValidator = (value: string) => {
    return (
        matchIsValidTel(value, { onlyCountries: ["RU"] }) ||
        "Неверный формат номера телефона"
    );
};
