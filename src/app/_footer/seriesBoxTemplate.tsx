import { PageData } from "@/lib";
import { FooterBoxTemplate } from "./footerBoxTemplate";
import { CategorySeriesBoxTemplate } from "../_shared/categorySeriesBoxTemplate";

export const SeriesBoxTemplate = ({ series }: { series: PageData[] }) => {
    return (
        <FooterBoxTemplate title={"Серии"}>
            <CategorySeriesBoxTemplate series={series} />
        </FooterBoxTemplate>
    );
};
