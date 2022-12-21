import { useRef } from 'react';
import { useLongPress } from 'ahooks';
import Link from 'next/link';
import { useSelection } from '@/src/context/SelectionContext';
import { getQuery } from '@/src/utils';
import { EdgePage } from '@/src/interface/page.interface';
import { EdgeProduct } from '@/src/interface/product.interface';


interface Props {
  product?: EdgeProduct;
}
export function CardProductPagination({ product }: Props) {
  const { selected, toggle, isSelected } = useSelection();

  const query = getQuery()
  const ref = useRef<HTMLDivElement>(null);
  useLongPress(() => toggle(product?.node._id!), ref, {
    moveThreshold: { x: 5, y: 5 },
  });
  return (
    <div className="card-dashboard group" >
      <input
        type="checkbox"
        className={`card-dashboard-input ${
          selected.length !== 0 && 'opacity-100'
        }`}
        onChange={() => toggle(product?.node._id!)}
        checked={isSelected(product?.node._id!)}
      />
      <div ref={ref} className="">
        <img
          className="h-[12rem] w-full object-cover"
          src={
            product?.node.dataProduct.seoProduct?.image?.src! ||
            'https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg'
          }
          alt={
            product?.node.dataProduct.seoProduct?.image?.alt! || 'image description'
          }
        />
        <Link
          href={`/dashboard/sites/${query[2]}/${product?.node.siteId}/product/${product?.node.dataProduct.type.slug}/${product?.node._id}`}
          className="flex items-center h-[3rem] mx-2 cursor-pointer"
        >
          <h2 className=" text-sm tracking-wide truncate">
            {product?.node.dataProduct.seoProduct?.title}
          </h2>
        </Link>
      </div>
    </div>
  );
}
