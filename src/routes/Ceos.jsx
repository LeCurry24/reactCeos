import { useLoaderData } from "react-router-dom";

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
            <h2>ceos is here</h2>
            <p>here i am</p>
            <ul>
                {data.map((ceo,index) => {
                    return (
                        <li key={index}>
                            {ceo.name} - {ceo.year}
                        </li>
                    );

                })};
            </ul>
        </>
    );
};
export default Ceos;