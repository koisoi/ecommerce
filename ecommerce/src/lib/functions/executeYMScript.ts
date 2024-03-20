export const executeYMScript = (
    label:
        | "appeal_add_callback-footer"
        | "basket_add_main"
        | "appeal_add_from-order"
        | "order_add_main"
        | "order_add_fast"
) => {
    // @ts-ignore
    // eslint-disable-next-line
    ym(96790254, "reachGoal", label);
};
