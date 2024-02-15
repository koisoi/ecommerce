import { FieldValues, RegisterOptions } from "react-hook-form";

/**
 * Тип правил для тега Controller
 */
export type RulesType = Omit<
    RegisterOptions<FieldValues, "email">,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
>;
