import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "Tilgjengelig søk",
    description: "Søk etter aktiviteter, kurs og møteplasser",
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="nb">
            <body>{children}</body>
        </html>
    );
};