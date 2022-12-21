'use client';

import { useSearch } from '@/src/context/SearchContext';
import React, { Fragment, Suspense, use } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SelectionProvider } from '@/src/context/SelectionContext';
import { ListSite } from '@/src/interface/site.interface';
import { hardwareStoreGetSitesWithCursor } from '@/lib/hardware-store/site/getSitesWithCursor';
import { HeadingDashboardOption } from '../../heading/HeadingDashboardOptions';
import { CardSitePagination } from '../../card/cardSitePagination';
import { PaginationSites } from '../../pagination/paginationSites';

interface Props {
  sites: ListSite;
}

export function HardwareStoreGridSites(props: Props) {
  const { sites } = props;
  const { connectionArgs } = useSearch();
  const { data } = useQuery({
    queryKey: ['hardware-store-get-sites-with-cursor', connectionArgs],
    queryFn: () => hardwareStoreGetSitesWithCursor(connectionArgs),
    initialData: sites,
    keepPreviousData: true
  });
  return (
    <SelectionProvider ids={data?.page.edges.map(data => data.node._id)}>
      <HeadingDashboardOption />
      <div className={'grid-sites'}>
        {data.page.edges.map((data, i) => (
          <CardSitePagination key={i} site={data} />
        ))}
      </div>
      {data.pageData.count > 12 && <PaginationSites sites={data} />}
    </SelectionProvider>
  );
}
