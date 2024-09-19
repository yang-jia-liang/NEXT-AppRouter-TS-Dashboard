
import {fetchFilteredInvoices} from "@/lib/data";


export default async function Table({ query, currentPage }:  { query: string, currentPage: number }) {
    const data = await fetchFilteredInvoices(query, currentPage)

    return (
        <table className="text-center border border-solid border-gray-800 mt-6">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>amount</th>
                    <th>status</th>
                    <th>date</th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map(row => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.amount}</td>
                            <td>{row.status}</td>
                            <td>{row.date.toString()}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}