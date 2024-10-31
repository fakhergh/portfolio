import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import { Footer } from '@/app/components/Footer/Footer';
import { Navbar } from '@/app/components/Navbar/Navbar';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Fakher Ghouili',
    description: 'Fakher Ghouili, Senior FullStack Js Developer',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
