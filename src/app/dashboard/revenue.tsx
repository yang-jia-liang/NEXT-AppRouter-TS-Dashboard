import { fetchRevenue } from "@/lib/data";
import {lusitana} from "@/assets/font";

export default async function Revenue() {
    const revenue = await fetchRevenue();

    return (
        <section className="w-full md:col-span-4">
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Recent Revenue
            </h2>

            {
                revenue?.map(item => (
                    <li key={item.month}>{item.month}：{item.revenue}</li>
                ))
            }
        </section>
    )
}