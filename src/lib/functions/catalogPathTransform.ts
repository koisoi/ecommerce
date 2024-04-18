export const categoryPathToAlias = (category?: string | null) =>
    category?.replaceAll("_", "-").replace("TOP.", "").replaceAll(".", "/");

export const categoryAliasToPath = (category?: string | null) =>
    category
        ? `TOP.${category.replaceAll("-", "_").replaceAll("/", ".")}`
        : category;
