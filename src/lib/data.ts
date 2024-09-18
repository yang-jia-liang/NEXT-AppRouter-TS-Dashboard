import { sql } from '@vercel/postgres';
import type { Revenue, LatestInvoiceRaw } from "./definition";
import { formatCurrency } from "./utils"

export async function fetchRevenue () {
    try {
        // Artificially delay a response for demo purposes.
        // Don't do this in production :)

        // console.log('Fetching revenue data...');
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Revenue>`SELECT * FROM revenue`;

        // console.log('Data fetch completed after 3 seconds.');

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch fetchRevenue');
    }
}

export async function fetchLatestInvoices () {
    try {
        const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

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

export async function fetchTotalPaidInvoices () {
    try {

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch TotalPaidInvoices.');
    }
}

export async function fetchTotalPendingInvoices () {
    try {

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch TotalPendingInvoices.');
    }
}

export async function fetchNumberOfInvoices () {
    try {

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch NumberOfInvoices.');
    }
}

export async function fetchNumberOfCustomers () {
    try {

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch NumberOfCustomers.');
    }
}