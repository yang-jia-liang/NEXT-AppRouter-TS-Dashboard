export default async function Page() {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000)
    })

    return (
        <p>CustomerPage</p>
    )
}