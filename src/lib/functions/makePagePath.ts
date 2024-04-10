export const makePagePath = (slug: string[]) => {
    let parts = ["TOP"];
    slug.forEach((el) => {
        parts.push(el.replaceAll("-", "_"));
    });

    return parts.join(".");
};
