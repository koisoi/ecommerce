import { CSSProperties, ReactNode } from "react";
import Metro from "@/assets/svg/m-red.svg";

const MetroStation = ({ children }: { children?: ReactNode }) => {
    const iconStyling: CSSProperties = {
        width: "16px",
        marginRight: "3px"
    };

    return (
        <span>
            <Metro style={iconStyling} />
            {children}
        </span>
    );
};

export default MetroStation;
