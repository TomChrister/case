import { searchActivities } from "@/lib/search";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") ?? "";

    // HTTP inn og ut
    const results = searchActivities(query);

    return Response.json({ results });
}