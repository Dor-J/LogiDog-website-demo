import '~/styles/globals.css'

import { type Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
    title: "Dor's assignment",
    description: 'Assesment for junior intern assignment',
    icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
