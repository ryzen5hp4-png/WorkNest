import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header"
import Main from "../../components/MainBlock/Main"

const Clients = () => {

    return (
        <>

            <Helmet>
                <title>Clients | WorkNest</title>
            </Helmet>

            <Header />

            <Main>
                Clients
            </Main>

        </>
    )
}

export default Clients