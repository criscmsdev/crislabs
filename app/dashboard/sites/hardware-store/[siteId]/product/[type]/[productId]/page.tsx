import { hardwareStoreGetPages0WithCursor } from "@/lib/hardware-store/page/page0/getPagesWithCursor";
import { hardwareStoreGetProduct } from "@/lib/hardware-store/products/getProduct";
import { hardwareStoreGetSite } from "@/lib/hardware-store/site/getSite";
import { hardwareStoreGetSites } from "@/lib/hardware-store/site/getSites";
import { SearchProvider } from "@/src/context/SearchContext";
import { HardwareStoreGridPages0 } from "@/ui/tailwindCSS/grid/hardware-store/GridPages0";
import { HeadingDashboard } from "@/ui/tailwindCSS/heading/HeadingDashboard";
import { ProductOverviewsTool } from "@/ui/tailwindCSS/productOverviews/productOverviewsTool";

interface Props {
  params: {
    siteId: string;
    type: string;
    productId: string;
  };
}

export default async function Page(props: Props) {
  const {
    params: { siteId, productId, type },
  } = props;
  const product = await hardwareStoreGetProduct(productId, type)
  // console.log('product', product)
  // const pages = await hardwareStoreGetPages0WithCursor({ first: 12 }, siteId);

  return (
    <SearchProvider>
      {/* <h1>Product</h1> */}
      <HeadingDashboard product={product}/>

      <ProductOverviewsTool product={product}/>
      {/* <HeadingDashboard /> */}
      {/* <HeadingDashboard site={site}/>
      <HardwareStoreGridPages0 pages0={pages} parentId={siteId} /> */}
    </SearchProvider>
  );
}

// export async function generateStaticParams() {
//   const sites = await hardwareStoreGetSites();
//   return sites.map((data) => ({ siteId: data._id }));
// }
