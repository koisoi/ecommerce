import BreadcrumbsTemplate from "@/app/(shared)/breadcrumbsTemplate";
import { PageData, catalogPageBreadcrumb } from "@/lib";
import CategoriesMenuTemplate from "./categoriesMenuTemplate";
import PageTitle from "@/app/(shared)/text/pageTitle";

const CatalogPageTemplate = ({ pages }: { pages: PageData[] }) => {
    return (
        <>
            <BreadcrumbsTemplate linksArray={catalogPageBreadcrumb} />
            <PageTitle landingTitleCheck>Каталог</PageTitle>
            <CategoriesMenuTemplate pages={pages} />
        </>
    );
};

export default CatalogPageTemplate;
