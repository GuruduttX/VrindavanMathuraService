export async function GET() {
  try {
    const baseUrl = process.env.BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/users/tour-packages`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch packages");
    }

    const result = await res.json();
    const packages = result.data || [];

    const urls = packages.map((pack: any) => `
      <url>
        <loc>${baseUrl}/${pack.slug}</loc>
        <lastmod>${
          pack.updatedAT
            ? new Date(pack.updatedAT).toISOString()
            : new Date(pack.createdAt).toISOString()
        }</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `).join('');

    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
      </urlset>`,
      {
        headers: {
          "Content-Type": "application/xml",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
        }
      }
    );

  } catch (error) {
    console.error(error);
    return new Response("Error generating sitemap", { status: 500 });
  }
}