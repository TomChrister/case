"use client";

import { useState } from "react";
import SearchForm from '@/components/SearchForm';
import SearchResults from "@/components/SearchResults";
import type { Activity } from '@/data/activities';

export default function Home() {
    const [results, setResults] = useState<Activity[] | null>(null);

    async function handleSearch(query: string) {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data: { results: Activity[] } = await response.json();
        setResults(data.results);
    }

    return (
        <main>
            <h1>Tilgjengelig søk</h1>
            <SearchForm onSearch={handleSearch} />
            <SearchResults results={results} />
        </main>
    )
}