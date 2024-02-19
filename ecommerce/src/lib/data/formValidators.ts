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
export const ruPhonePattern: {
    value: RegExp;
    message: string;
} = {
    // value: /^(\+7|7|8)[0-9]{10}$/,
    value: /^[0-9]{10}$/,
    message: "Неверный формат номера телефона"
};
