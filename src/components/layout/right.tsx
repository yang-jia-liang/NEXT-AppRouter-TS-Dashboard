import Image from "next/image";

export default function LayoutRight() {
    return (
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            <Image
                src="/image/hero-desktop.png"
                width={1000}
                height={760}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
            />

            <Image
                src="/image/hero-mobile.png"
                width={560}
                height={620}
                className="md:hidden"
                alt="Screenshot of the dashboard project showing mobile version"
            />
        </div>
    )
}