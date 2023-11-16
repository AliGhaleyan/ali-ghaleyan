import { Navbar } from "./components/Navbar";

const BasePageLayout = (props: React.PropsWithChildren) => {
    return <main>
        <Navbar />
        {props.children}
    </main>;
};

export default BasePageLayout;