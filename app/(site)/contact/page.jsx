import React from "react";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import { fetchPageData, fetchContactDetails } from "@/sanity/api";

export default async function Contact() {
  const data = await fetchPageData("/contact");
  const contactDetails = await fetchContactDetails();

  return (
    <main>
      <LayoutRenderer page={data} contactDetails={contactDetails} />
    </main>
  );
}
