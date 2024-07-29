import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'NextJS Starter Kit',
    description: 'This is a NextJS starter kit',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    )
}
