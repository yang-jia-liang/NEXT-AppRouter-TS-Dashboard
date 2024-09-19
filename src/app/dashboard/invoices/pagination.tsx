'use client'

import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Pagination({ pages }: { pages: number }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const [page, setPage] = useState(1);
    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set('currentPage', String(page));
        router.replace(`${pathname}?${params.toString()}`)
    }, [page])

    return (
        <div className="flex gap-2">
            {
                new Array(pages).fill('').map((_, index) => (
                    <div
                        key={index}
                        className="border border-gray-800 border-solid px-2 cursor-pointer"
                        onClick={() => setPage(index + 1)}
                    >
                        {index + 1}
                    </div>
                ))
            }
        </div>
    )
}