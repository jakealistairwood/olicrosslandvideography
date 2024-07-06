import Image from "next/image";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import { fetchHomepageData } from "@/sanity/api";

export default async function Home() {
  const data = await fetchHomepageData();
  
  return (
    <main className="">
      <LayoutRenderer page={data} />
    </main>
  );
}
