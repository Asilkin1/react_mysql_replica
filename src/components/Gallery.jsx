import { useEffect, useState } from "react"
import { Table } from "./Table";
const Gallery = () => {
    const [beers,setBeers] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/beers')
        .then((res) => res.json())
        .then((data) => setBeers(data.rows))
    },[]) 

    console.log(beers);

    return(
        <>
        {beers && <Table data={beers} />}
        </>
    )
}

export default Gallery;