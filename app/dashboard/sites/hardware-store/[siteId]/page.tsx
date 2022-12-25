import { hardwareStoreGetPages0WithCursor } from "@/lib/hardware-store/page/page0/getPagesWithCursor";
import { hardwareStoreGetSite } from "@/lib/hardware-store/site/getSite";
import { hardwareStoreGetSites } from "@/lib/hardware-store/site/getSites";
import { SearchProvider } from "@/src/context/SearchContext";
import { HardwareStoreGridPages0 } from "@/ui/tailwindCSS/grid/hardware-store/GridPages0";
import { HeadingDashboard } from "@/ui/tailwindCSS/heading/HeadingDashboard";

interface Props {
  params: {
    siteId: string;
  };
}

export default async function Page(props: Props) {
  const {
    params: { siteId },
  } = props;
  const site = await hardwareStoreGetSite(siteId)
  const pages = await hardwareStoreGetPages0WithCursor({ first: 12 }, siteId);

  return (
    <SearchProvider>
      <HeadingDashboard site={site}/>
      <HardwareStoreGridPages0 pages0={pages} parentId={siteId} />
    </SearchProvider>
  );
}

export async function generateStaticParams() {
  const sites = await hardwareStoreGetSites();
  return sites.map((data) => ({ siteId: data._id }));
}
