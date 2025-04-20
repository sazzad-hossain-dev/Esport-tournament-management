import Footer from "@/components/Footer"; // Assuming Footer is in the components folder
import Header from "@/components/Header"; // Assuming Header is in the components folder
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
            <body className="flex flex-col min-h-screen bg-bg">
                {/* Header */}
                <div className="fixed top-0 left-0 w-full z-50">
                    <Header />
                </div>

                {/* Main Content */}
                <main className="flex-grow mt-20 ">{children}</main>

                {/* Footer */}
                <Footer />
            </body>
        </html>
    );
}
