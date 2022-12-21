'use client';
import React from 'react';
import { useSearch } from '@/src/context/SearchContext';
import { useQuery } from '@tanstack/react-query';
import { SelectionProvider } from '@/src/context/SelectionContext';
import { ListPage } from '@/src/interface/page.interface';
import { hardwareStoreGetPages1WithCursor } from '@/lib/hardware-store/page/page1/getPagesWithCursor';
import { HeadingDashboardOption } from '../../heading/HeadingDashboardOptions';
import { CardPage1Pagination } from '../../card/cardPage1Pagination';
import { PaginationPages } from '../../pagination/paginationPages';
import { hardwareStoreGetPages2WithCursor } from '@/lib/hardware-store/page/page2/getPagesWithCursor';
import { CardPage2Pagination } from '../../card/cardPage2Pagination';

interface Props {
  pages2: ListPage;
  parentId: string;
}

export function HardwareStoreGridPages2(props: Props) {
  const { pages2, parentId } = props;
  const { connectionArgs } = useSearch();
  const { data } = useQuery({
    queryKey: [
      'hardware-store-get-pages2-with-cursor',
      connectionArgs,
      parentId,
    ],
    queryFn: () => hardwareStoreGetPages2WithCursor(connectionArgs, parentId),
    initialData: pages2,
  });
  return (
    <SelectionProvider ids={data?.page.edges.map((data) => data.node._id)}>
      <HeadingDashboardOption />
      <div className={'grid-sites'}>
        {data.page.edges.map((data, i) => (
          <CardPage2Pagination key={i} page={data} />
        ))}
      </div>
      {data.pageData.count > 12 && <PaginationPages pages={data} />}
    </SelectionProvider>
  );
}
