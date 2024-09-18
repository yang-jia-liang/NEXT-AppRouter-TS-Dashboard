import { fetchRevenue } from "@/lib/data";

export default function RevenueChart() {
    const revenue = await fetchRevenue();

    return (
        <div>
            1
        </div>
    )
}