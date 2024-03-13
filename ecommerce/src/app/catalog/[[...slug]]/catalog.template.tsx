import AppBreadcrumbs from "@/app/(shared)/breadcrumbs/breadcrumbs.template";
import { catalogPageBreadcrumb } from "@/lib";
import CategoriesMenuTemplate from "./categoriesMenu.template";
import PageTitle from "@/app/(shared)/text/pageTitle.template";

const CatalogPage = ({pages}: {pages: PageData[]}) => {
    console.log(pages);
    return (
        <>
            <AppBreadcrumbs linksArray={catalogPageBreadcrumb} />
            <PageTitle>Каталог</PageTitle>
            <CategoriesMenuTemplate pages={pages} />
        </>
    );
};

export default CatalogPage;
