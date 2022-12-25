'use client';
import React from 'react';
import { hardwareStoreGetPage0 } from '@/lib/hardware-store/page/page0/getPage';
import { hardwareStoreGetPage1 } from '@/lib/hardware-store/page/page1/getPage';
import { hardwareStoreGetPage2 } from '@/lib/hardware-store/page/page2/getPage';
import { hardwareStoreGetProduct } from '@/lib/hardware-store/products/getProduct';
import { hardwareStoreGetSite } from '@/lib/hardware-store/site/getSite';
import { useUI } from '@/src/context/UIContext';
import { Article } from '@/src/interface/article.interface';
import { Page } from '@/src/interface/page.interface';
import { Product } from '@/src/interface/product.interface';
import { Site } from '@/src/interface/site.interface';
import { getQuery } from '@/src/utils';
import { FolderPlusIcon, PencilIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import { SlideOversForm } from '../ecommerce/slideOvers';
import { TabFormPage } from '../tabs/tabFormPage';
import { TabFormSite } from '../tabs/tabFormSite';

const Site = ({ title }: { title: string }) => {
  const query = getQuery();
  const {
    toggle: {
      actions: { toggle },
    },
    children: { setChildrens },
  } = useUI();
  const handleClick = () => {
    toggle();
    setChildrens(<TabFormSite />);
  };
  return (
    <React.Fragment>
      <div className="min-w-0 flex space-x-2">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {title}
        </h2>
      </div>
      <div className="flex">
        <span className="block">
          <button
            className="btn-primary space-x-3"
            onClick={() => handleClick()}
          >
            <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
            <p className="hidden sm:block">Add Site</p>
          </button>
        </span>
      </div>
    </React.Fragment>
  );
};

// const WearSite = ({site}:{site: Site}) => {
//   const { data } = useQuery({
//     queryKey: ['wear-get-site', site._id],
//     queryFn: () => wearGetSite(site._id),
//     initialData: site,
//   });
//   const {
//     toggle: {
//       actions: { toggle },
//     },
//     children: { setChildrens },
//   } = useUI();
//   const handleClick = () => {
//     toggle();
//     setChildrens(<TabFormSite site={data} />)
//   };
//   const handleClickAdd = () => {
//     toggle();
//     setChildrens(<TabFormPage type={data.dataSite.type}/>);
//   }
//   return (
//     <React.Fragment>
//       <div className="min-w-0 flex space-x-2">
//         <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
//           {data.dataSite.name}
//         </h2>
//         <span className="block">
//           <button
//             type="button"
//             className="btn-default"
//             onClick={() => handleClick()}
//           >
//             <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
//             <p className="hidden sm:block">Edit</p>
//           </button>
//         </span>
//       </div>
//       <div className="flex">
//         <span className="block">
//           <button className="btn-primary space-x-3" onClick={() => handleClickAdd()}>
//             <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
//             <p className="hidden sm:block">
//               Add Page
//             </p>
//           </button>
//         </span>
//       </div>
//     </React.Fragment>
//   )
// }
const HardwareStoreSite = ({ site }: { site: Site }) => {
  const { data } = useQuery({
    queryKey: ['hardware-store-get-site', site._id],
    queryFn: () => hardwareStoreGetSite(site._id),
    initialData: site,
  });
  const {
    toggle: {
      actions: { toggle },
    },
    children: { setChildrens },
  } = useUI();
  const handleClick = () => {
    toggle();
    setChildrens(<TabFormSite site={data} />);
  };
  const handleClickAdd = () => {
    toggle();
    setChildrens(<TabFormPage type={data.dataSite.type} />);
  };
  return (
    <React.Fragment>
      <div className="min-w-0 flex space-x-2">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {data.dataSite.name}
        </h2>
        <span className="block">
          <button
            type="button"
            className="btn-default"
            onClick={() => handleClick()}
          >
            <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            <p className="hidden sm:block">Edit</p>
          </button>
        </span>
      </div>
      <div className="flex">
        <span className="block">
          <button
            className="btn-primary space-x-3"
            onClick={() => handleClickAdd()}
          >
            <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
            <p className="hidden sm:block">Add Page</p>
          </button>
        </span>
      </div>
    </React.Fragment>
  );
};

const HardwareStorePage0 = ({ page }: { page: Page }) => {
  const { data } = useQuery({
    queryKey: ['hardware-store-get-page0', page._id],
    queryFn: () => hardwareStoreGetPage0(page._id),
    initialData: page,
  });
  const {
    toggle: {
      actions: { toggle },
    },
    children: { setChildrens },
  } = useUI();
  const handleClick = () => {
    toggle();
    setChildrens(<TabFormPage page={data} />);
  };
  const handleClickAdd = () => {
    toggle();
    setChildrens(<TabFormPage type={data.dataPage.type} />);
  };
  return (
    <React.Fragment>
      <div className="min-w-0 flex space-x-2">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {data.dataPage.seoPage.title}
        </h2>
        <span className="block">
          <button
            type="button"
            className="btn-default"
            onClick={() => handleClick()}
          >
            <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            <p className="hidden sm:block">Edit</p>
          </button>
        </span>
      </div>
      <div className="flex">
        <span className="block">
          <button
            className="btn-primary space-x-3"
            onClick={() => handleClickAdd()}
          >
            <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
            <p className="hidden sm:block">
              {data.dataPage.type === 'page' && 'Add Page'}
              {data.dataPage.type === 'category' && 'Add Category'}
              {data.dataPage.type === 'page-blank' && 'Add Component'}
              {data.dataPage.type === 'product' && 'Add Product'}
            </p>
          </button>
        </span>
      </div>
    </React.Fragment>
  );
};
// const WearPage0 = ({ page }: { page: Page }) => {
//   const { data } = useQuery({
//     queryKey: ['wear-get-page0', page._id],
//     queryFn: () => wearGetPage0(page._id),
//     initialData: page,
//   });
//   const {
//     toggle: {
//       actions: { toggle },
//     },
//     children: { setChildrens },
//   } = useUI();
//   const handleClick = () => {
//     toggle();
//     setChildrens(<TabFormPage page={data} />);
//   };
//   const handleClickAdd = () => {
//     toggle();
//     setChildrens(<TabFormPage type={data.dataPage.type}/>);

//   }
//   return (
//     <React.Fragment>
//       <div className="min-w-0 flex space-x-2">
//         <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
//           {data.dataPage.seoPage.title}
//         </h2>
//         <span className="block">
//           <button
//             type="button"
//             className="btn-default"
//             onClick={() => handleClick()}
//           >
//             <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
//             <p className="hidden sm:block">Edit</p>
//           </button>
//         </span>
//       </div>
//       <div className="flex">
//         <span className="block">
//           <button className="btn-primary space-x-3" onClick={() => handleClickAdd()}>
//             <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
//             <p className="hidden sm:block">
//               {data.dataPage.type === 'page' && 'Add Page'}
//               {data.dataPage.type === 'category' && 'Add Category'}
//               {data.dataPage.type === 'page-blank' && 'Add Component'}
//               {data.dataPage.type === 'product' && 'Add Product'}
//             </p>
//           </button>
//         </span>
//       </div>
//     </React.Fragment>
//   );
// };
// const WearPage1 = ({ page }: { page: Page }) => {
//   const { data } = useQuery({
//     queryKey: ['wear-get-page1', page._id],
//     queryFn: () => wearGetPage1(page._id),
//     initialData: page,
//   });
//   const {
//     toggle: {
//       actions: { toggle },
//     },
//     children: { setChildrens },
//   } = useUI();
//   const handleClick = () => {
//     toggle();
//     setChildrens(<TabFormPage page={data} />);
//   };
//   const handleClickAdd = () => {
//     toggle();
//     setChildrens(<TabFormPage type={data.dataPage.type}/>);

//   }
//   return (
//     <React.Fragment>
//       <div className="min-w-0 flex space-x-2">
//         <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
//           {data.dataPage.seoPage.title}
//         </h2>
//         <span className="block">
//           <button
//             type="button"
//             className="btn-default"
//             onClick={() => handleClick()}
//           >
//             <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
//             <p className="hidden sm:block">Edit</p>
//           </button>
//         </span>
//       </div>
//       <div className="flex">
//         <span className="block">
//           <button className="btn-primary space-x-3" onClick={() => handleClickAdd()}>
//             <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
//             <p className="hidden sm:block">
//               {data.dataPage.type === 'page' && 'Add Page'}
//               {data.dataPage.type === 'category' && 'Add Category'}
//               {data.dataPage.type === 'sub-category' && 'Add Sub Category'}
//               {data.dataPage.type === 'page-blank' && 'Add Component'}
//               {data.dataPage.type === 'product' && 'Add Product'}
//             </p>
//           </button>
//         </span>
//       </div>
//     </React.Fragment>
//   );
// };
// const WearPage2 = ({ page }: { page: Page }) => {
//   const { data } = useQuery({
//     queryKey: ['wear-get-page2', page._id],
//     queryFn: () => wearGetPage2(page._id),
//     initialData: page,
//   });
//   const {
//     toggle: {
//       actions: { toggle },
//     },
//     children: { setChildrens },
//   } = useUI();
//   const handleClick = () => {
//     toggle();
//     setChildrens(<TabFormPage page={data} />);
//   };
//   const handleClickAdd = () => {
//     toggle();
//     setChildrens(<TabFormPage type={data.dataPage.type}/>);

//   }
//   return (
//     <React.Fragment>
//       <div className="min-w-0 flex space-x-2">
//         <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
//           {data.dataPage.seoPage.title}
//         </h2>
//         <span className="block">
//           <button
//             type="button"
//             className="btn-default"
//             onClick={() => handleClick()}
//           >
//             <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
//             <p className="hidden sm:block">Edit</p>
//           </button>
//         </span>
//       </div>
//       <div className="flex">
//         <span className="block">
//           <button className="btn-primary space-x-3" onClick={() => handleClickAdd()}>
//             <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
//             <p className="hidden sm:block">
//               {data.dataPage.type === 'page' && 'Add Page'}
//               {data.dataPage.type === 'category' && 'Add Category'}
//               {data.dataPage.type === 'sub-category' && 'Add Sub Category'}
//               {data.dataPage.type === 'page-blank' && 'Add Component'}
//               {data.dataPage.type === 'product' && 'Add Product'}
//             </p>
//           </button>
//         </span>
//       </div>
//     </React.Fragment>
//   );
// };

const HardwareStorePage1 = ({ page }: { page: Page }) => {
  const { data } = useQuery({
    queryKey: ['hardware-store-get-page1', page._id],
    queryFn: () => hardwareStoreGetPage1(page._id),
    initialData: page,
  });
  const {
    toggle: {
      actions: { toggle },
    },
    children: { setChildrens },
  } = useUI();
  const handleClick = () => {
    toggle();
    setChildrens(<TabFormPage page={data} />);
  };
  const handleClickAdd = () => {
    toggle();
    setChildrens(<TabFormPage type={data.dataPage.type} />);
  };
  return (
    <React.Fragment>
      <div className="min-w-0 flex space-x-2">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {data.dataPage.seoPage.title}
        </h2>
        <span className="block">
          <button
            type="button"
            className="btn-default"
            onClick={() => handleClick()}
          >
            <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            <p className="hidden sm:block">Edit</p>
          </button>
        </span>
      </div>
      <div className="flex">
        <span className="block">
          <button
            className="btn-primary space-x-3"
            onClick={() => handleClickAdd()}
          >
            <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
            <p className="hidden sm:block">
              {data.dataPage.type === 'page' && 'Add Page'}
              {data.dataPage.type === 'category' && 'Add Category'}
              {data.dataPage.type === 'sub-category' && 'Add Sub Category'}
              {data.dataPage.type === 'page-blank' && 'Add Component'}
              {data.dataPage.type === 'product' && 'Add Product'}
            </p>
          </button>
        </span>
      </div>
    </React.Fragment>
  );
};
const HardwareStorePage2 = ({ page }: { page: Page }) => {
  const { data } = useQuery({
    queryKey: ['hardware-store-get-page2', page._id],
    queryFn: () => hardwareStoreGetPage2(page._id),
    initialData: page,
  });
  const {
    toggle: {
      actions: { toggle },
    },
    children: { setChildrens },
  } = useUI();
  const handleClick = () => {
    toggle();
    setChildrens(<TabFormPage page={data} />);
  };
  const handleClickAdd = () => {
    toggle();
    setChildrens(<TabFormPage type={data.dataPage.type} />);
  };
  return (
    <React.Fragment>
      <div className="min-w-0 flex space-x-2">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {data.dataPage.seoPage.title}
        </h2>
        <span className="block">
          <button
            type="button"
            className="btn-default"
            onClick={() => handleClick()}
          >
            <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            <p className="hidden sm:block">Edit</p>
          </button>
        </span>
      </div>
      <div className="flex">
        <span className="block">
          <button
            className="btn-primary space-x-3"
            onClick={() => handleClickAdd()}
          >
            <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
            <p className="hidden sm:block">
              {data.dataPage.type === 'page' && 'Add Page'}
              {data.dataPage.type === 'category' && 'Add Category'}
              {data.dataPage.type === 'sub-category' && 'Add Sub Category'}
              {data.dataPage.type === 'page-blank' && 'Add Component'}
              {data.dataPage.type === 'tool' && 'Add Product'}
            </p>
          </button>
        </span>
      </div>
    </React.Fragment>
  );
};
const HardwareStoreProduct = ({ product }: { product: Product }) => {
  const { data } = useQuery({
    queryKey: [
      'hardware-store-get-product',
      product._id,
      product.dataProduct.type.slug,
    ],
    queryFn: () =>
      hardwareStoreGetProduct(product._id, product.dataProduct.type.slug),
    initialData: product,
  });
  const {
    toggle: {
      actions: { toggle },
    },
    children: { setChildrens },
  } = useUI();
  const handleClick = () => {
    toggle();
    // setChildrens(<TabFormPage page={data} />);
  };
  const handleClickAdd = () => {
    toggle();
    // setChildrens(<TabFormPage type={data.dataPage.type} />);
  };
  return (
    <React.Fragment>
      <div className="min-w-0 flex space-x-2">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {data.dataProduct.seoProduct.title}
        </h2>
        <span className="block">
          <button
            type="button"
            className="btn-default"
            onClick={() => handleClick()}
          >
            <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            <p className="hidden sm:block">Edit</p>
          </button>
        </span>
      </div>
      {/* <div className="flex">
        <span className="block">
          <button
            className="btn-primary space-x-3"
            onClick={() => handleClickAdd()}
          >
            <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
            <p className="hidden sm:block">
              {data.dataProduct.type.slug === 'page' && 'Add Product'}
              {data.dataProduct.type.slug === 'category' && 'Add Category'}
              {data.dataProduct.type.slug === 'sub-category' && 'Add Sub Category'}
              {data.dataProduct.type.slug === 'page-blank' && 'Add Component'}
              {data.dataProduct.type.slug === 'tool' && 'Add Product'}
            </p>
          </button>
        </span>
      </div> */}
    </React.Fragment>
  );
};
interface Props {
  page?: Page;
  article?: Article;
  site?: Site;
  product?: Product;
}

export function HeadingDashboard(props: Props) {
  const { page, site, article, product } = props;
  const query = getQuery();
  const {
    children: { childrens },
  } = useUI();
  return (
    <div>
      <div className="flex lg:items-center justify-between">
        {query.length === 3 && query[2] === 'wear' && (
          <Site title="Sites Wear" />
        )}
        {/* 
        {query.length === 6 && query[2] === 'wear' && query[4] === 'page0' && (
          <WearPage0 page={page!} />
          )}
          {query.length === 6 && query[2] === 'wear' && query[4] === 'page1' && (
            <WearPage1 page={page!} />
            )}
            {query.length === 6 && query[2] === 'wear' && query[4] === 'page2' && (
              <WearPage2 page={page!} />
            )} */}
        {query.length === 3 && query[2] === 'hardware-store' && (
          <Site title="Sites Hardware Store" />
        )}
        {query.length === 4 && query[2] === 'hardware-store' && (
          <HardwareStoreSite site={site!} />
        )}
        {query.length === 6 &&
          query[2] === 'hardware-store' &&
          query[4] === 'page0' && <HardwareStorePage0 page={page!} />}
        {query.length === 6 &&
          query[2] === 'hardware-store' &&
          query[4] === 'page1' && <HardwareStorePage1 page={page!} />}
        {query.length === 6 &&
          query[2] === 'hardware-store' &&
          query[4] === 'page2' && <HardwareStorePage2 page={page!} />}
        {query.length === 7 &&
          query[2] === 'hardware-store' &&
          query[4] === 'product' && <HardwareStoreProduct product={product!} />}
      </div>
      {/* <SlideOvers /> */}
      <SlideOversForm>{childrens}</SlideOversForm>
    </div>
  );
}
