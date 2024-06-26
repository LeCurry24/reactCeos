import { useLoaderData, Link } from "react-router-dom";

export async function loader() {
    const response = await fetch('http://localhost:8000/ceos');
    const data = await response.json();

    return {data};
}

const Ceos = () => {
    const {data} = useLoaderData();

    console.log(data)
    return(
        <>
            <h2>Ceos Will Be Here</h2>
            <p>Here I Am!!</p>
            <ul>
                {data.map((ceo,index) => {
                    return (
                        <li key={index}>
                           <Link to={ceo.slug}> {ceo.name} - {ceo.year}</Link>
                        </li>
                    );

                })};
            </ul>
        </>
    );
};
export default Ceos;