import { hardwareStoreGetPage0StoreNavigation } from '@/lib/hardware-store/page/page0/getPageStoreNavigation';
import { hardwareStoreGetSiteStoreNavigation } from '@/lib/hardware-store/site/getSite';
import { StoreNavigation } from '@/ui/tailwindCSS/ecommerce/storeNavigation';
import { Fragment } from 'react';

interface Props {
  children: React.ReactNode;
  params: {
    siteId: string;
  };
}

export default async function DashboardLayout(props: Props) {
  const {
    children,
    params: { siteId },
  } = props;
  const site = await hardwareStoreGetSiteStoreNavigation(siteId);
  return (
    <Fragment>
      <StoreNavigation site={site} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </div>
    </Fragment>
  );
}
