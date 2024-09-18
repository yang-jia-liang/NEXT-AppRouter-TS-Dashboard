import { lusitana } from "@/assets/font";

export default function LayoutHeader() {
    return (
        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
            <div
                className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
            >
                {/*<GlobeAltIcon className="h-12 w-12 rotate-[15deg]"/>*/}
                <p className="text-[44px]">Acme</p>
            </div>
        </div>
    )
}