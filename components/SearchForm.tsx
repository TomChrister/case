"use client";

import { useState, type SyntheticEvent } from "react";

type SearchFormProps = {
    onSearchAction: (query: string) => void;
};

export default function SearchForm({ onSearchAction }: SearchFormProps) {
    const [query, setQuery] = useState("");

    function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        onSearchAction(query);
    }

    return (
        <form role="search" onSubmit={handleSubmit}>
            <label htmlFor="search-input">
                Søk etter aktiviteter, kurs og møteplasser
            </label>
            <input
                id="search-input"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit">Søk</button>
        </form>
    )
}