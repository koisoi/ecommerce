import { Breadcrumb } from "../types/breadcrumbs";

export const homePageBreadcrumbs: Breadcrumb[] = [
    { link: "/", title: "Главная" }
];

export const warrantyBreadcrumbs: Breadcrumb[] = [
    ...homePageBreadcrumbs,
    { link: "/warranty.html", title: "Гарантии и возврат" }
];

export const searchBreadcrumbs: Breadcrumb[] = [
    ...homePageBreadcrumbs,
    { link: "/search", title: "Поиск" }
];

export const deliveryBreadcrumbs: Breadcrumb[] = [
    ...homePageBreadcrumbs,
    { link: "/delivery.html", title: "Доставка и оплата" }
];

export const contactsBreadcrumbs: Breadcrumb[] = [
    ...homePageBreadcrumbs,
    { link: "/contacts.html", title: "Контактная информация" }
];

export const catalogPageBreadcrumb: Breadcrumb[] = [
    ...homePageBreadcrumbs,
    { link: "/catalog", title: "Каталог" }
];

export const cartBreadcrumbs: Breadcrumb[] = [
    ...homePageBreadcrumbs,
    { link: "/cart", title: "Корзина" }
];

export const thanksForOrderBreadcrumbs: Breadcrumb[] = [
    ...cartBreadcrumbs,
    { link: "/cart/thanks", title: "Спасибо за заказ!" }
];
