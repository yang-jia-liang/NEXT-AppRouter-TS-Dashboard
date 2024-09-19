import {fetchCardData} from "@/lib/data";

export default async function Card() {
    const { paid_total, pending_total, invoice_total, customer_total } = await fetchCardData();

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
                Collected
                <p>{paid_total}</p>
            </div>

            <div>
                Pending
                <p>{pending_total}</p>
            </div>

            <div>
                Total Invoices
                <p>{invoice_total}</p>
            </div>

            <div>
                Total Customers
                <p>{customer_total}</p>
            </div>
        </div>
    )
}