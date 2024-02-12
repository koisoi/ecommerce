import { ReactNode } from "react";
import Breadcrumbs from "../(shared)/breadcrumbs/breadcrumbs";
import Container from "../(shared)/container.template";

const CategoryLayout = ({ children }: { children: ReactNode }) => {
    // const wrapperProps: BoxProps = {
    //     maxWidth: "1400px",
    //     width: "100%",

    //     fontSize: "15px"
    // };

    return (
        <Container>
            <Breadcrumbs />
            {children}
        </Container>
    );
};

export default CategoryLayout;
