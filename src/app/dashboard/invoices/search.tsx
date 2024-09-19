'use client'

import {useSearchParams, usePathname, useRouter} from "next/navigation";
import { useDebouncedCallback } from 'use-debounce'

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams)

        params.set('currentPage', '1')

        if (value) {
            params.set('query', value)
        } else {
            params.delete('query')
        }

        router.replace(`${pathname}?${params.toString()}`)
    }, 1000)

    return (
        <input
            type="text"
            placeholder="Search invoices..."
            onChange={(e) => handleSearch(e.target.value)}
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue={searchParams.get('query')?.toString()}
        />
    )
}