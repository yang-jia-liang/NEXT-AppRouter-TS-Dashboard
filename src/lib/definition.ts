

export type Revenue = {
    month: string;
    revenue: number;
};

export type LatestInvoice = {
    id: string;
    name: string;
    image_url: string;
    email: string;
    amount: string; // 处理后的金额，类型为字符串
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
    amount: number; // 数据库返回的原始金额，类型为数字
};

export type Customer = {
    id: string;
    name: string;
    email: string;
    image_url: string;
};

export type InvoicesTable = {
    id: string;
    customer_id: string;
    name: string;
    date: string;
    amount: number;
    status: 'pending' | 'paid';
};