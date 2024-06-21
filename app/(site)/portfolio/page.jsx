import React from "react";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import { fetchPageData, fetchPortfolio, fetchCategories } from "@/sanity/api";
import PortfolioWrapper from "@/pages/PortfolioWrapper";

export default async function Portfolio() {
  const data = await fetchPageData("/portfolio");
  const portfolio = await fetchPortfolio();
  const categories = await fetchCategories();

  return (
    <main className="">
      {/* <Porfolio /> */}
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <PortfolioWrapper portfolio={portfolio} categories={categories} />
      <LayoutRenderer page={data} />
    </main>
  );
}
