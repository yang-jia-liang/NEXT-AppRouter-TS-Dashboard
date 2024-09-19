import {fetchLatestInvoices} from "@/lib/data";
import {lusitana} from "@/assets/font";

export default async function Invoice() {
    const latestInvoices = await fetchLatestInvoices();

    return (
        <section className="md:col-span-4">
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Latest Invoices
            </h2>

            {
                latestInvoices?.map(item => (
                    <li key={item.id}>{item.name}：{item.amount}</li>
                ))
            }
        </section>
    )
}