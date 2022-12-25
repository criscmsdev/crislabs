// 'use client'
import { Tab } from '@headlessui/react'
import { classNames } from '@/src/utils';
import { SiteForm } from '../form/site/siteForm';
import { Site } from '@/src/interface/site.interface';
import FormSite from '../form/site/FormSite';

interface TabFormSite {
  site?: Site
}

export function TabFormSite ({ site }: TabFormSite) {

  return (
    <div className="w-full max-w-lg ">
      <Tab.Group >
        <Tab.List className="flex bg-white py-3">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm font-medium leading-5 text-indigo-700',
                // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white border border-l-0 border-b-0 border-gray-300'
                  : 'text-indigo-900 hover:bg-white/[0.12] border border-l-0 border-r-0 border-t-0 border-gray-300'
              )
            }
          >
            {site ? "Update" : "Create"}
          </Tab>
          <Tab
            // disabled={!site ? false : true}
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm font-medium leading-5',
                !site ? "text-indigo-700" : "text-gray-200 opacity-40",
                // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white border border-b-0 border-gray-300'
                  : 'text-blue-900 hover:bg-white/[0.12] border border-l-0 border-r-0 border-t-0 border-gray-300'
              )
            }
          >
            Data Base
          </Tab>
          <Tab
            // disabled={site ? false : true}
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm font-medium leading-5',
                !site ? "text-indigo-700" : "text-gray-200 opacity-40",

                // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white border border-b-0 border-r-0 border-gray-300'
                  : 'text-blue-900 hover:bg-white/[0.12] border border-l-0 border-r-0 border-t-0 border-gray-300'
              )
            }
          >
            Images
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel
            className={classNames('rounded-xl bg-white')}
          >
            <FormSite site={site}/>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white'
            )}
          >
            {/* <DataBaseForm toggle={toggle} setLeft={setLeft}  site={site} /> */}

          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white'
            )}
          >
            {/* <ImageSiteForm toggle={toggle} setLeft={setLeft}  site={site} /> */}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
