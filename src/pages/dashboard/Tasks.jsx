import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header"
import Main from "../../components/MainBlock/Main"

const Tasks = () => {
    return (
        <>

            <Helmet>
                <title>Tasks | WorkNest</title>
            </Helmet>

            <Header />

            <Main>
                Tasks
            </Main>
        </>
    )
}

export default Tasks