import { landingConfig } from "..";

export const executeYMScript = (
    label:
        | "appeal_add_callback-footer"
        | "basket_add_main"
        | "appeal_add_from-order"
        | "order_add_main"
        | "order_add_fast"
) => {
    eval(`ym(${landingConfig.ymId}, "reachGoal", "${label}")`);
};
