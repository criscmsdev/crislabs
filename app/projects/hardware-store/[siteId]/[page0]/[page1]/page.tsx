import { hardwareStoreGetPage1BySlug } from '@/lib/hardware-store/page/page1/getPage';
import { CategoryPreviews } from '@/ui/tailwindCSS/ecommerce/categoryPreviews';
import React from 'react';

interface Props {
  params: {
    page0: string;
    page1: string;
  };
}

export default async function Page(props: Props) {
  const {
    params: { page0, page1 },
  } = props;
  const page = await hardwareStoreGetPage1BySlug(
    page1,
    process.env.SITE_HARDWARE_STORE as string,
  );
  console.log('page', page1);
  return (
    <CategoryPreviews
      page={page}
      url={`/projects/hardware-store/63a07590f6e7d8a5a48fcf3b/${page0}/${page1}`}
    />
  );
}
