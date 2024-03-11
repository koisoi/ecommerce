import AppBreadcrumbs from "@/app/(shared)/breadcrumbs/breadcrumbs.template";
import { catalogPageBreadcrumb } from "@/lib";
import CategoriesMenuTemplate from "./categoriesMenu.template";
import PageTitle from "@/app/(shared)/text/pageTitle.template";

const CatalogPage = () => {
    return (
        <>
            <AppBreadcrumbs linksArray={catalogPageBreadcrumb} />
            <PageTitle>Каталог</PageTitle>
            <CategoriesMenuTemplate />
        </>
    );
};

export default CatalogPage;
