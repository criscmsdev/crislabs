'use client';
import { useSearch } from '@/src/context/SearchContext';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { SelectionProvider } from '@/src/context/SelectionContext';
import { HeadingDashboardOption } from '../../heading/HeadingDashboardOptions';
import { CardPage0Pagination } from '../../card/cardPage0Pagination';
import { PaginationPages } from '../../pagination/paginationPages';
import { hardwareStoreGetPages0WithCursor } from '@/lib/hardware-store/page/page0/getPagesWithCursor';
import { ListPage } from '@/src/interface/page.interface';

interface Props {
  pages0: ListPage;
  parentId: string
}

export function HardwareStoreGridPages0(props: Props) {
  const { pages0, parentId } = props;
  const { connectionArgs } = useSearch();
  const { data } = useQuery({
    queryKey: ['hardware-store-get-pages0-with-cursor', connectionArgs, parentId],
    queryFn: () => hardwareStoreGetPages0WithCursor(connectionArgs, parentId),
    initialData: pages0,
  });
  return (
    <SelectionProvider ids={data?.page.edges.map(data => data.node._id)}>
      <HeadingDashboardOption />
      <div className={'grid-sites'}>
        {data.page.edges.map((data, i) => (
          <CardPage0Pagination key={i} page={data} />
        ))}
      </div>
      {data.pageData.count > 12 && <PaginationPages pages={data} />}
    </SelectionProvider>
  );
}
