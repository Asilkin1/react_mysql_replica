import { Table } from "./Table"

// Only read data from replica table
const Replica = ({data}) => {

    return (
        <>
        Replicated data
        {data && <Table data={data} />}
        </>
    )
}


export default Replica;