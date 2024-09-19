'use server' // 所有导出的function, 都是服务器操作, 可以被客户端组件或服务端组件使用

export async function createInvoice(formData: FormData) {
    console.log({formData});
}

