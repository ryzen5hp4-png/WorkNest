import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header"
import Main from "../../components/MainBlock/Main"

const Finance = () => {
    return (
        <>
            <Helmet>
                <title>Finanse | WorkNest</title>
            </Helmet>

            <Header />

            <Main>
                Financees
            </Main>
        </>
    )
}

export default Finance