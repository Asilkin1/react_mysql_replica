// Table with data
export const Table = ({data}) =>  {
    return(
        <>
        {/* Table with master table */}
        <table className="space-x-3 flex-wrap m-2">
                    <thead>
                        <tr>
                        <th className="p-2">Kind</th>
                        <th className="p-2">Strength</th>
                        </tr>
                    </thead>
        {Object.keys(data).map((key) =>{
        return (
                <>
                    <tbody className="space-x-3 gap-10">
                        <tr>
                        <td key={key}>{data[key].Bottle}</td>
                        <td className={`bg-green-${parseInt(data[key].Strength) * 100}`} key={key + 1}>{data[key].Strength}</td>
                        </tr>
                    </tbody>
                </>
            )})}
            </table>
        </>
    )
}


