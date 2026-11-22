import type { Activity } from '@/data/activities';

type SearchResultProps = {
    results: Activity[] | null;
};

export default function SearchResults({ results }: SearchResultProps) {
    let status = "";
    if (results !== null) {
        status = results.length === 0 ? "Ingen treff" : `${results.length} treff`;
    }

    return (
        <section aria-labelledby='results-heading'>
            <h2 id='results-heading'>Resultater</h2>

            <p role='status'>{status}</p>

            {results !== null && results.length > 0 && (
                <ul>
                    {results.map((activity) => (
                        <li key={activity.id}>
                            <h3>{activity.title}</h3>
                            <p>{activity.type}, {activity.location}</p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}