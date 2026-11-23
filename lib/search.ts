import { activities, type Activity } from "@/data/activities";

// Ren funksjon, bare data inn og data ut
export function searchActivities(query: string): Activity[] {
    const q = query.trim().toLocaleLowerCase("nb-NO");

    // Tomt søk viser alt
    if (q === "") return activities;

    return activities.filter((activity) =>
        activity.title.toLocaleLowerCase("nb-NO").includes(q),
    );
}