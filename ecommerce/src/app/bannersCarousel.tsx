"use client";

import Carousel from "react-material-ui-carousel";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";
import { BannerData } from "@/lib";
import Banner from "@/app/(shared)/banner.template";
import { usePathname } from "next/navigation";

const BannersCarousel = ({ banners }: { banners: BannerData[] }) => {
    const pathname = usePathname();

    if (pathname !== "/") return <></>;

    // props
    const carouselProps: CarouselProps = {
        animation: "slide",
        autoPlay: true,
        swipe: true,
        cycleNavigation: true,
        stopAutoPlayOnHover: true,

        sx: {
            width: "100%",
            minHeight: "760px",

            div: {
                transform: "none !important"
            }
        }
    };

    return (
        <Carousel {...carouselProps}>
            {banners.map((banner, i) => (
                <Banner key={i} banner={banner} />
            ))}
        </Carousel>
    );
};

export default BannersCarousel;
