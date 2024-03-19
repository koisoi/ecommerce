export const getLinkDomain = (initialLink: string) =>
    process.env.NODE_ENV === "development"
        ? "https://telescope1.ru" + initialLink
        : initialLink;
