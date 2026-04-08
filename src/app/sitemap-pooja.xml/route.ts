export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_URL || "https://ourdomain.com";

    const res = await fetch(`${baseUrl}/api/users/pooja`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch pooja data");
    }

    const result = await res.json();
    const poojas = result.data || [];

    const urls = poojas.map((pooja: any) => `
      <url>
        <loc>${baseUrl}/pooja/${pooja.slug}</loc>
        <lastmod>${new Date(pooja.updateAt || pooja.createdAt).toISOString()}</lastmod>
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
    return new Response("Error generating pooja sitemap", { status: 500 });
  }
}