import { hardwareStoreGetPage0 } from "@/lib/hardware-store/page/page0/getPage";
import { hardwareStoreGetPages0 } from "@/lib/hardware-store/page/page0/getPages";
import { hardwareStoreGetPage1 } from "@/lib/hardware-store/page/page1/getPage";
import { hardwareStoreGetPages1 } from "@/lib/hardware-store/page/page1/getPages";
import { hardwareStoreGetPages1WithCursor } from "@/lib/hardware-store/page/page1/getPagesWithCursor";
import { hardwareStoreGetPage2 } from "@/lib/hardware-store/page/page2/getPage";
import { hardwareStoreGetPages2 } from "@/lib/hardware-store/page/page2/getPages";
import { hardwareStoreGetProductsWithCursor } from "@/lib/hardware-store/products/getProductsWithCursor";
import { SearchProvider } from "@/src/context/SearchContext";
import { HardwareStoreGridPages1 } from "@/ui/tailwindCSS/grid/hardware-store/GridPages1";
import { HardwareStoreGridProducts } from "@/ui/tailwindCSS/grid/hardware-store/GridProducts";
import { HeadingDashboard } from "@/ui/tailwindCSS/heading/HeadingDashboard";

interface Props {
  params: {
    siteId: string;
    page2Id: string;
  };
}

export default async function Page(props: Props) {
  const {
    params: { page2Id, siteId },
  } = props;
  const page = await hardwareStoreGetPage2(page2Id);
  const products = await hardwareStoreGetProductsWithCursor({ first: 12 }, page.dataPage.type, page2Id);
  return (
    <SearchProvider>
      <HeadingDashboard page={page} />
      <HardwareStoreGridProducts products={products} parentId={page2Id} type={page.dataPage.type} />
    </SearchProvider>
  );
}

export async function generateStaticParams() {
  const pages = await hardwareStoreGetPages2();
  return pages.map((data) => ({ siteId: data.siteId, page2Id: data._id }));
}
