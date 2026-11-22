import type { Metadata } from 'next';
import "./globals.css";
import React from 'react';

export const metadata: Metadata = {
    title: "Tilgjenelig søk",
    description: "Søk etter aktiviteter, kurs og møteplasser",
};

export default function Rootlayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="nb">
            <body>{children}</body>
        </html>
    );
};