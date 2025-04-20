import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "e-Sport management",
    description: "A simple e-sport management app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
