import { hardwareStoreGetSitesWithCursor } from '@/lib/hardware-store/site/getSitesWithCursor';
import { SearchProvider } from '@/src/context/SearchContext';
import { HardwareStoreGridSites } from '@/ui/tailwindCSS/grid/hardware-store/GridSites';
import { HeadingDashboard } from '@/ui/tailwindCSS/heading/HeadingDashboard';
import React from 'react';

export default async function Page() {
  const sites = await hardwareStoreGetSitesWithCursor({ first: 12 });
  // console.log('sites', sites);
  return (
    <React.Fragment>
      <SearchProvider>
        <HeadingDashboard />
        <HardwareStoreGridSites sites={sites} />
      </SearchProvider>
    </React.Fragment>
  );
}
