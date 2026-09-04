import { Helmet } from "react-helmet-async"
import Header from "../../components/Header/Header"
import Main from "../../components/MainBlock/Main"



const Dashboard = () => {


    return (
        <>
            <Helmet>
                <title>Dashboard | WorkNest</title>
            </Helmet>

            <Header />

            <Main>
                Main
            </Main>
        </>
    )
}

export default Dashboard