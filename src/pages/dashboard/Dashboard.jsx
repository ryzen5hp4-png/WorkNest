import { Helmet } from "react-helmet-async"
import Header from "../../components/Header/Header"

const Dashboard = () => {


    return (
        <>
            <Helmet>
                <title>Dashboard | WorkNest</title>
            </Helmet>

            <Header />
        </>
    )
}

export default Dashboard