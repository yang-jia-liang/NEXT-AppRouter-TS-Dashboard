import { sql } from '@vercel/postgres';
import {Revenue, LatestInvoiceRaw, Customer, InvoicesTable} from "./definition";
import { formatCurrency } from "./utils"

export async function fetchRevenue () {
    try {
        // Artificially delay a response for demo purposes.
        // Don't do this in production :)

        console.log('Fetching revenue data...');
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Revenue>`SELECT * FROM revenue`;

        console.log('Data fetch completed after 3 seconds.');

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch fetchRevenue');
    }
}

export async function fetchLatestInvoices () {
    try {
        const data = await sql<LatestInvoiceRaw>`
          SELECT invoices.amount, customers.name, invoices.id
          
          FROM invoices
          JOIN customers ON invoices.customer_id = customers.id
          
          ORDER BY invoices.date DESC
          LIMIT 5
        `;

        const latestInvoices = data.rows.map((invoice) => ({
            ...invoice,
            amount: formatCurrency(invoice.amount),
        }));

        return latestInvoices;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch LatestInvoices');
    }
}

export async function fetchCardData() {

    const amount_total = sql`
        SELECT
            SUM(
                CASE
                    WHEN status = 'paid'
                    THEN amount
                    ELSE 0
                END
            )
            AS paid_total,
            
            SUM(
                CASE
                    WHEN status = 'pending'
                    THEN amount
                    ELSE 0
                END
            )
            AS pending_total
        FROM invoices
    `
    const invoice_total = sql<LatestInvoiceRaw>`SELECT COUNT(*) FROM invoices`;
    const customer_total = sql<Customer>`SELECT COUNT(*) FROM customers`

    try {
        const data = await Promise.all([amount_total, invoice_total, customer_total])

        return {
            paid_total: formatCurrency(data[0].rows[0].paid_total),
            pending_total: formatCurrency(data[0].rows[0].pending_total),
            invoice_total: data[1].rows[0].count,
            customer_total: data[2].rows[0].count
        }
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch card data.');
    }
}

export async function fetchFilteredInvoices(query: string, currentPage: number) {
    try {
        const data = await sql<InvoicesTable>`
            SELECT invoices.id, customers.name, invoices.amount, invoices.status, invoices.date
            FROM invoices
            JOIN customers ON customers.id = invoices.customer_id
            WHERE customers.name ILIKE ${`%${query}%`}
            ORDER BY invoices.date ASC
            LIMIT 10 OFFSET ${currentPage * 10 - 10}
        `

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch FilteredInvoices.');
    }
}

export async function fetchInvoicesPages () {
    try {
        const data = await sql`
            SELECT COUNT(*) FROM invoices
        `

        return Math.ceil(data.rows[0].count / 10);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch InvoicesPages.');
    }
}