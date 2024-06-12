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
      <PortfolioWrapper portfolio={portfolio} categories={categories} />
      <LayoutRenderer page={data} />
    </main>
  );
}
