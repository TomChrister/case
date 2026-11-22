"use client";

import { useState } from "react";

type SearchFormProps = {
    onSearch: (query: string) => void;
};

export default function SearchForm({ onSearch }: SearchFormProps) {
    const [query, setQuery] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSearch(query);
    }

    return (
        <form role='search' onSubmit={handleSubmit}>
            <label htmlFor="search-input">
                Søk etter aktiviteter, kurs og møteplasser
            </label>
            <input
                id="search-input"
                type='search'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit">Søk</button>
        </form>
    )
}