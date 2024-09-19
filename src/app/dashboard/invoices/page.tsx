import {Suspense} from "react";
import {lusitana} from "@/assets/font";
import Search from "./search";
import Table from "./table"
import Pagination from "./pagination"
import {fetchInvoicesPages} from "@/lib/data";

export default async function Page({ searchParams }: { searchParams: { query: string, currentPage: string } }) {
    const query = searchParams.query || '';
    const currentPage = Number(searchParams.currentPage) || 1;
    const totalPage = await fetchInvoicesPages() || 1

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>

            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search/>
            </div>

            <Suspense fallback={<span>Table loading ...</span>}>
                <Table query={query} currentPage={currentPage}/>
            </Suspense>

            <div className="mt-5 flex w-full justify-end">
                <Pagination pages={totalPage} />
            </div>
        </div>
    )
}