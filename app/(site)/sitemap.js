import { fetchPages, fetchPortfolioPages } from "@/sanity/api";

export default async function sitemap() {
    const basePages = await fetchPages();
    const portfolioPages = await fetchPortfolioPages();

    const basePageRoutes = basePages?.map((page) => {
        const formattedSlug = page.slug.replace(/^\//, "");
        return {
            url: `https://olicrossland.com/${formattedSlug}`,
            lastModified: page?._updatedAt,
            changeFrequency: page?.slug === "/portfolio" ? "daily" : "weekly",
            priority: page?.slug === "/" ? 1 : 0.5,
        };
    });

    const portfolioPageRoutes = portfolioPages?.map((page) => {
        const formattedSlug = page.slug.replace(/^\//, "");
        return {
            url: `https://olicrossland.com/portfolio/${formattedSlug}`,
            lastModified: page?._updatedAt,
            changeFrequency: "weekly",
            priority: 0.5,
        };
    });

    // Ensure the homepage is first
    const homepage = basePageRoutes.find(
        (page) => page.url === "https://olicrossland.com/"
    );
    const otherBasePages = basePageRoutes.filter(
        (page) => page.url !== "https://olicrossland.com/"
    );

    return [homepage, ...otherBasePages, ...portfolioPageRoutes];
}
