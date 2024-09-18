import "@/styles/global.css"
import { inter } from "@/assets/font"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    <body className={inter.className}>
    {children}
    </body>
    </html>
  );
}
