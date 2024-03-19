import BreadcrumbsTemplate from "@/app/(shared)/breadcrumbsTemplate";
import { PageData, catalogPageBreadcrumb } from "@/lib";
import CategoriesMenuTemplate from "./categoriesMenu.template";
import PageTitle from "@/app/(shared)/text/pageTitle";

const CatalogPage = ({ pages }: { pages: PageData[] }) => {
    return (
        <>
            <BreadcrumbsTemplate linksArray={catalogPageBreadcrumb} />
            <PageTitle>Каталог</PageTitle>
            <CategoriesMenuTemplate pages={pages} />
        </>
    );
};

export default CatalogPage;
