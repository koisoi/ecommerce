import BreadcrumbsTemplate from "@/app/_shared/breadcrumbsTemplate";
import { PageData, catalogPageBreadcrumb } from "@/lib";
import CategoriesMenuTemplate from "./categoriesMenuTemplate";
import PageTitle from "@/app/_shared/text/pageTitle";

const CatalogPageTemplate = ({ pages }: { pages: PageData[] }) => {
    return (
        <>
            <BreadcrumbsTemplate linksArray={catalogPageBreadcrumb} />
            <PageTitle>Каталог</PageTitle>
            <CategoriesMenuTemplate pages={pages} />
        </>
    );
};

export default CatalogPageTemplate;
