import React from "react";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import { fetchPageData, fetchContactDetails } from "@/sanity/api";

export default async function Portfolio() {
  const data = await fetchPageData("/about");
  const contactDetails = await fetchContactDetails();

  return (
    <main>
      <LayoutRenderer page={data} contactDetails={contactDetails} />
    </main>
  );
}
