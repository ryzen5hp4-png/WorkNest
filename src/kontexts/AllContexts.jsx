import { ClientsProvider } from "./ClientsContext";

const AllContexts = (props) => {
    const {
        children
    } = props;

    return (
        <ClientsProvider>
            {children}
        </ClientsProvider>
    );
};

export default AllContexts;