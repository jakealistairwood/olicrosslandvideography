import React from "react";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import { fetchPageData } from "@/sanity/api";

export default async function Portfolio() {
  const data = await fetchPageData("/about");

  return (
    <main className="">
      <LayoutRenderer page={data} />
    </main>
  );
}
