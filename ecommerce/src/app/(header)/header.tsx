import { useAppSelector } from "@/lib";
import { GlobalState } from "@/lib/slices/global.slice";
import HeaderTemplate from "./header.template";

const Header = () => {
    const { categories } = useAppSelector(GlobalState);

    return <HeaderTemplate categories={categories} />;
};

export default Header;
