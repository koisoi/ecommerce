import { ReactNode } from "react";
import Container from "../(shared)/container.template";
import Breadcrumbs from "../(shared)/breadcrumbs/breadcrumbs";

const CategoryLayout = ({ children }: { children: ReactNode }) => {
    return <Container>{children}</Container>;
};

export default CategoryLayout;
