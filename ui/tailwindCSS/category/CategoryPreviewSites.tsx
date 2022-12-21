import Link from 'next/link';

const callouts = [
  {
    name: 'Wear',
    description: 'Clothings, Backpacks, Handbags',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Hardware Store',
    description: 'Tools, Paint',
    imageSrc: 'https://cdn.vox-cdn.com/thumbor/66wrL_8cjRWXB6cRBxLfz0pOAJw=/0x0:5568x3712/1200x900/filters:focal(2339x1411:3229x2301)/cdn.vox-cdn.com/uploads/chorus_image/image/66561674/shutterstock_1631123023.0.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/dashboard/sites/hardware-store',
  },
  {
    name: 'Food',
    description: 'Meal, Cakes, Beverages, IceCream',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Marketing',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export function CategoryPreviewSites () {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-10  lg:max-w-none">
          <h2 className="text-2xl font-bold text-gray-900">Sites</h2>

          <div className="mt-6 space-y-12 grid sm:grid-cols-3 lg:grid-cols-5 md:gap-x-6 md:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href={`${callout.href}`}>
                    <>
                    <span className="absolute inset-0" />
                    <p>
                      {callout.name}
                    </p>
                    </>
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
