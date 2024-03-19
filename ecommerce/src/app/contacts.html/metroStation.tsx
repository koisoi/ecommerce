import { CSSProperties, ReactNode } from "react";
import Metro from "@/assets/svg/m-red.svg";

const MetroStation = ({ children }: { children?: ReactNode }) => {
    const iconStyling: CSSProperties = {
        width: "16px",
        marginRight: "0.25rem"
    };

    return (
        <span>
            <Metro style={iconStyling} />
            {children}
        </span>
    );
};

export default MetroStation;
