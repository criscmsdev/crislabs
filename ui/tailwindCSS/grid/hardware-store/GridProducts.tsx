'use client';
import { useSearch } from '@/src/context/SearchContext';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { SelectionProvider } from '@/src/context/SelectionContext';
import { HeadingDashboardOption } from '../../heading/HeadingDashboardOptions';
import { ListProduct } from '@/src/interface/product.interface';
import { hardwareStoreGetProductsWithCursor } from '@/lib/hardware-store/products/getProductsWithCursor';
import { CardProductPagination } from '../../card/cardProductPagination';
import { PaginationProducts } from '../../pagination/paginationProducts';

interface Props {
  products: ListProduct;
  parentId: string
  type: string
}

export function HardwareStoreGridProducts(props: Props) {
  const { products, parentId, type } = props;
  const { connectionArgs } = useSearch();
  const { data } = useQuery({
    queryKey: ['hardware-store-get-products-with-cursor', connectionArgs, parentId, type],
    queryFn: () => hardwareStoreGetProductsWithCursor(connectionArgs, parentId, type),
    initialData: products,
  });
  return (
    <SelectionProvider ids={data?.page.edges.map(data => data.node._id)}>
      <HeadingDashboardOption />
      <div className={'grid-sites'}>
        {data.page.edges.map((data, i) => (
          <CardProductPagination key={i} product={data} />
        ))}
      </div>
      {data.pageData.count > 12 && <PaginationProducts products={data} />}
    </SelectionProvider>
  );
}
