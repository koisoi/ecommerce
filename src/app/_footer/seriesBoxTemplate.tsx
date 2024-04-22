import { PageData } from "@/lib";
import { FooterBoxTemplate } from "./footerBoxTemplate";
import { CategorySeriesBoxTemplate } from "../_shared/categorySeriesBoxTemplate";
import { BoxProps } from "@mui/material";

export const SeriesBoxTemplate = ({ series }: { series: PageData[] }) => {
    const seriesBoxProps: BoxProps = {
        justifyContent: { xs: "center", smd: "flex-start" }
    };

    return (
        <FooterBoxTemplate title={"Серии"}>
            <CategorySeriesBoxTemplate series={series} props={seriesBoxProps} />
        </FooterBoxTemplate>
    );
};
