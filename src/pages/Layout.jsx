import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return(
        <>
            <Link to="/ceos">ceo list</Link>
            <Link to="/ceos/add">Add CEOS</Link>
            <Outlet/>
        </>
    )
}
export default Layout