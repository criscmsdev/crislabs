import { hardwareStoreGetPage0 } from "@/lib/hardware-store/page/page0/getPage";
import { hardwareStoreGetPages0 } from "@/lib/hardware-store/page/page0/getPages";
import { hardwareStoreGetPages1WithCursor } from "@/lib/hardware-store/page/page1/getPagesWithCursor";
import { SearchProvider } from "@/src/context/SearchContext";
import { HardwareStoreGridPages1 } from "@/ui/tailwindCSS/grid/hardware-store/GridPages1";
import { HeadingDashboard } from "@/ui/tailwindCSS/heading/HeadingDashboard";

interface Props {
  params: {
    siteId: string;
    page0Id: string;
  };
}

export default async function Page(props: Props) {
  const {
    params: { page0Id, siteId },
  } = props;
  const page = await hardwareStoreGetPage0(page0Id);
  const pages = await hardwareStoreGetPages1WithCursor({ first: 12 }, page0Id);

  return (
    <SearchProvider>
      <HeadingDashboard page={page} />
      <HardwareStoreGridPages1 pages1={pages} parentId={page0Id} />
    </SearchProvider>
  );
}

export async function generateStaticParams() {
  const pages = await hardwareStoreGetPages0();
  return pages.map((data) => ({ siteId: data.siteId, page0Id: data._id }));
}
