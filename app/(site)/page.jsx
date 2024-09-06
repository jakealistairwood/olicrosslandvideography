import LayoutRenderer from "@/layouts/LayoutRenderer";
import { fetchHomepageData } from "@/sanity/api";

export default async function Home() {
  const data = await fetchHomepageData();
  
  return (
    <main>
      <LayoutRenderer page={data} />
    </main>
  );
}
