import HeaderTemplate from "./header.template";
import { useRouter } from "next/navigation";
import { landingConfig } from "../config";

const Header = () => {
    const router = useRouter();

    const handleDesktopTabClick = (path: string): void => {
        router.push(`/catalog?category=${path}`);
    };

    return (
        <HeaderTemplate
            categories={landingConfig.categories}
            onDesktopTabClick={handleDesktopTabClick}
        />
    );
};

export default Header;
