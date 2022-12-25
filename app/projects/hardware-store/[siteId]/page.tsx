import { hardwareStoreGetPages0ByParentId } from '@/lib/hardware-store/page/page0/getPages';
import { CategoryPreviews } from '@/ui/tailwindCSS/ecommerce/categoryPreviews';
import { ProductLists } from '@/ui/tailwindCSS/ecommerce/productLists';
import React from 'react';

interface Props {
  params: {
    siteId: string;
  };
}

export default async function Page(props: Props) {
  const {
    params: { siteId },
  } = props;
  const pages = await hardwareStoreGetPages0ByParentId(siteId);
  return (
    <React.Fragment>
      {pages
        .filter((page) => page.dataPage.type === 'category')
        .map((page0) => (
          <React.Fragment>
            <CategoryPreviews
              page={page0}
              url={`/projects/hardware-store/63a07590f6e7d8a5a48fcf3b/${page0.slug}`}
            />
            {page0.pages?.map((page1) => (
              <React.Fragment>
                <CategoryPreviews
                  page={page1}
                  url={`/projects/hardware-store/63a07590f6e7d8a5a48fcf3b/${page0.slug}/${page1.slug}`}
                />
                {/* {page1.pages?.map((page2) => (
                  <React.Fragment>
                    <CategoryPreviews
                      page={page2}
                      url={`/projects/hardware-store/63a07590f6e7d8a5a48fcf3b/${page0.slug}/${page1.slug}/${page2.slug}`}
                    />
                  </React.Fragment>
                ))} */}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      {/* <ProductLists /> */}
    </React.Fragment>
  );
}
