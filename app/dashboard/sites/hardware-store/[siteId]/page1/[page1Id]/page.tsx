
import { hardwareStoreGetPage1 } from "@/lib/hardware-store/page/page1/getPage";
import { hardwareStoreGetPages1 } from "@/lib/hardware-store/page/page1/getPages";
import { hardwareStoreGetPages2WithCursor } from "@/lib/hardware-store/page/page2/getPagesWithCursor";
import { SearchProvider } from "@/src/context/SearchContext";
import { HardwareStoreGridPages2 } from "@/ui/tailwindCSS/grid/hardware-store/GridPages2";
import { HeadingDashboard } from "@/ui/tailwindCSS/heading/HeadingDashboard";

interface Props {
  params: {
    siteId: string;
    page1Id: string;
  };
}

export default async function Page(props: Props) {
  const {
    params: { page1Id, siteId },
  } = props;
  const page = await hardwareStoreGetPage1(page1Id);
  const pages = await hardwareStoreGetPages2WithCursor({ first: 12 }, page1Id);

  return (
    <SearchProvider>
      <HeadingDashboard page={page} />
      <HardwareStoreGridPages2 pages2={pages} parentId={page1Id} />
    </SearchProvider>
  );
}

export async function generateStaticParams() {
  const pages = await hardwareStoreGetPages1();
  return pages.map((data) => ({ siteId: data.siteId, page1Id: data._id }));
}
