"use client";

import { usePathname } from "next/navigation";
import BreadcrumbsTemplate from "./breadcrumbs.template";
import { useEffect } from "react";

const Breadcrumbs = () => {
    const pathArray = usePathname().split("/").slice(1);
    const linksArray = pathArray.map((path, i, array) => {
        const link = `${array[i - 1] ? "/" + array[i - 1] : ""}/${path}`;
        let title = "";

        switch (path) {
            case "catalog":
                title = "Каталог";
                break;

            case "product":
                title = "Товар";
                break;
        }

        return {
            link,
            title
        };
    });

    useEffect(() => {
        console.log(pathArray, linksArray);
    });

    return <BreadcrumbsTemplate linksArray={linksArray} />;
};

export default Breadcrumbs;
