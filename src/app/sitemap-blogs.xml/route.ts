

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/users/blog`,
      {
       
        cache: "force-cache",
      }
    );

    if (!res.ok) throw new Error("Failed to fetch blogs");

    const resData = await res.json();
    const blogs = resData.data;

    const urls = blogs
      .map(
        (blog: any) => `
  <url>
    <loc>${process.env.BASE_URL}/stories/blog/${blog.slug}</loc>
    <lastmod>${new Date(blog.updateAt || blog.createdAt).toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
      )
      .join("");

    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
      {
        headers: {
          "Content-Type": "application/xml",
          "Cache-Control": "public, max-age=3600",
        },
      }
    );
  } catch (error) {
    console.error("Sitemap build error:", error);
    return new Response("", { status: 500 });
  }
}
