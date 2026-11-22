import { activities, type Activity } from '@/data/activities';

export function searchActivities(query: string): Activity[] {
    const q = query.trim().toLocaleLowerCase("nb-NO");

    if (q === "") return activities;

    return activities.filter((activity) =>
    activity.title.toLocaleLowerCase("nb-NO").includes(q),
        );
}