import { Link } from "react-router-dom"
import Login from "../../components/Auth/LogIn"

const AuthPage = () => {

    return (
        <>
            <Login provider="Google" />
            <Login provider="GitHub" />

            <Link to="/dashboard">aaaaaaaaaa</Link>
        </>
    )
}

export default AuthPage