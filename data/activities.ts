// Union gir feilsjekk og er klar for filter
export type ActivityType = "Aktivitet" | "Kurs" | "Møteplass";

export type Activity = {
    id: string;
    title: string;
    type: ActivityType;
    location: string;
};

export const activities: Activity[] = [
    { id: "1", title: "Skogstur for alle", type: "Aktivitet", location: "Oslo" },
    { id: "2", title: "Kurs i tastaturnavigasjon", type: "Kurs", location: "Bergen" },
    { id: "3", title: "Kaffeprat på torsdag", type: "Møteplass", location: "Trondheim" },
    { id: "4", title: "Turgruppe langs elva", type: "Aktivitet", location: "Oslo" },
    { id: "5", title: "Kurs i lydbøker", type: "Kurs", location: "Stavanger" },
];