import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header"
import Main from "../../components/MainBlock/Main"

const Settings = () => {
    return (
        <>
            <Helmet>
                <title>Settings | WorkNest</title>
            </Helmet>

            <Header />

            <Main>
                Settings
            </Main>
        </>
    )
}

export default Settings