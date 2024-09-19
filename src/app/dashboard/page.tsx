import { lusitana } from "@/assets/font";

import Card from "@/app/dashboard/card";
import Revenue from "@/app/dashboard/revenue";
import Invoice from "@/app/dashboard/invoice";
import {Suspense} from "react";

export default async function Page() {
    return (
       <main>
           <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>

           <Suspense fallback={<span>Card loading ...</span>}>
            <Card />
           </Suspense>

           <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
               <Suspense fallback={<span>RevenueChart loading ...</span>}>
                <Revenue />
               </Suspense>

               <Suspense fallback={<span>Invoice loading ...</span>}>
                <Invoice />
               </Suspense>
           </div>
       </main>
    )
}