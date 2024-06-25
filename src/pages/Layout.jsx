import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return(
        <>
            <Link to="/ceos">ceo list</Link>
            <Outlet/>
        </>
    )
}
export default Layout