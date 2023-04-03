import Gallery from "./Gallery";
import Replica from './Replica'
// Tables in the bar
const Tables = () =>{



    return(
    <>
        <h2>Master / Slave replication</h2>
        <div className="flex  flex-wrap space-evenly">
            <Gallery />
            <Replica />
        </div>
    </>)
}


export default Tables;