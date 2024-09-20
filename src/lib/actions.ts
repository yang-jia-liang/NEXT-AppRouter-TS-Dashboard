'use server'

import { z } from "zod";
import { sql } from '@vercel/postgres';
import {redirect} from "next/navigation";


const FormSchema = z.object({
    id: z.string(),
    customer_id: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string()
})

const CreateInvoice = FormSchema.omit({ id: true, date: true })

export async function createInvoice(formData: FormData) {
    const rawFormData = {
        customer_id: formData.get('customer_id'),
        amount: formData.get('amount'),
        status: formData.get('status')
    }

    const { customer_id, amount, status } = CreateInvoice.parse(rawFormData)
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

   await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customer_id}, ${amountInCents}, ${status}, ${date})
    `

    redirect('/dashboard/invoices')
}

