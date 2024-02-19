import { ReactNode } from "react";
import Container from "../(shared)/container.template";

const CategoryLayout = ({ children }: { children: ReactNode }) => {
    return <Container>{children}</Container>;
};

export default CategoryLayout;
