'use client'

import {useSearchParams, usePathname, useRouter} from "next/navigation";

export default function Pagination({ pages }: { pages: number }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('currentPage', String(page));
        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="flex gap-2">
            {
                new Array(pages).fill('').map((_, index) => (
                    <div
                        key={index}
                        className="border border-gray-800 border-solid px-2 cursor-pointer"
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </div>
                ))
            }
        </div>
    )
}