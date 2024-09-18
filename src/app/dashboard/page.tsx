import { lusitana } from "@/assets/font";

import { fetchRevenue, fetchLatestInvoices, fetchTotalPaidInvoices, fetchTotalPendingInvoices, fetchNumberOfInvoices, fetchNumberOfCustomers } from "@/lib/data";


export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();

    const totalPaidInvoices = await fetchTotalPaidInvoices();

    {totalPaidInvoices}

    return (
       <main>
           <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>

           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"></div>

           <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
               <section className="w-full md:col-span-4">
                   <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                       Recent Revenue
                   </h2>

                   {
                       revenue?.map(item => (
                           <li>{item.month}：{item.revenue}</li>
                       ))
                   }
               </section>

               <section className="md:col-span-4">
                   <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                       Latest Invoices
                   </h2>

                   {
                       latestInvoices?.map(item => (
                           <li>{item.name}：{item.amount}</li>
                       ))
                   }
               </section>
           </div>
       </main>
    )
}