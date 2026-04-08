export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_URL || "https://yourdomain.com";

    const res = await fetch(`${baseUrl}/api/users/taxi`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch taxi data");
    }

    const result = await res.json();
    const taxis = result.data || [];

    const urls = taxis.map((taxi:any) => `
      <url>
        <loc>${baseUrl}/taxi/${taxi.slug}</loc>
        <lastmod>${new Date(taxi.updatedAt || taxi.createdAt).toISOString()}</lastmod>
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
    return new Response("Error generating taxi sitemap", { status: 500 });
  }
}