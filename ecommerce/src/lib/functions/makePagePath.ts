export const makePagePath = (
    slug: string[]
) =>
{
    let parts = ['TOP'];
    slug.forEach((el) => {
        parts.push(el.replace('-', '_'));
    });

    return parts.join('.');
}
