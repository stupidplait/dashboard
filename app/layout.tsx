import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { ReactNode } from 'react';

interface RootLayoutProps {
    children: ReactNode,
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
};