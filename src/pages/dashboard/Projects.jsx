import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header"
import Main from "../../components/MainBlock/Main"

const Projects = () => {

    return (
        <>

            <Helmet>
                <title>Projects | WorkNest</title>
            </Helmet>

            <Header />

            <Main>
                Projects
            </Main>
        </>
    )
}

export default Projects