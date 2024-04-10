export const categoryPathToAlias = (category?: string | null) =>
    category?.replaceAll("_", "-").replace("TOP.", "");

export const categoryAliasToPath = (category?: string | null) =>
    category ? `TOP.${category.replaceAll("-", "_")}` : category;
