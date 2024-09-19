import {lusitana} from "@/assets/font";
import clsx from "clsx";
import {createInvoice} from "@/lib/actions";

export default function CreateInvoice() {
    const breadcrumbs = [
        { label: 'Invoices', href: '/dashboard/invoices' },
        {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
        },
    ]



    return (
        <div>
            <header className={`${lusitana.className} flex`}>
                {
                    breadcrumbs.map((item, index) => (
                        <div key={item.label}>
                            {index > 0 && <span className="mx-2">/</span>}
                            <span
                                className={clsx("cursor-pointer text-lg", {"font-bold": item.active} )}
                            >
                                {item.label}
                            </span>
                        </div>

                    ))
                }
            </header>

            <form action={createInvoice}>
                <div>
                    <label>
                        Choose customer<br/>
                        <select className="border border-solid border-gray-800" name="cutomer">
                            <option value="1">1</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>
                        Choose an amount<br/>
                        <input name="amount" className="border border-solid border-gray-800" type="number"/>
                    </label>
                </div>


                <div>
                    Set the invoice status<br/>
                    <label>
                        pending
                        <input type="radio" value="pending" name="status"/>
                    </label>

                    <label className="ml-6">
                        paid
                        <input type="radio" value="paid" name="status"/>
                    </label>
                </div>


                <div className="flex gap-6 justify-end">
                    <button className="border border-solid border-gray-800">cancel</button>
                    <button className="border border-solid border-gray-800" type="submit">create Invoice</button>
                </div>
            </form>
        </div>
    )
}