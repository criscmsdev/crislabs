'use client'
import { useEcommerceClientUI } from "@/src/context/UIContextEcommerceClient";
import { Site } from "@/src/interface/site.interface";

interface Props {
  site?: Site
}

export default function FormSite(props: Props) {
  const {
    toggleSlideOvers: {
      value,
      actions: { toggle, setLeft },
    },
  } = useEcommerceClientUI();
  return (
    <form
      className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
      method="POST"
    >
      {/* <TabFormSite /> */}
      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
        {/* <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                        Form
                        </Dialog.Title>
                        
                      </div> */}

        <div className="mt-8">
          <div className="flex-1 overflow-y-auto sm:rounded-md  inset-x-0 top-0">
            <div className="">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label className="label-form">Name</label>
                  <input
                    type="text"
                    autoComplete="off"
                    // {...register('name', {
                    //   required: 'Name required!!',
                    //   minLength: { value: 2, message: 'min 2 characters' },
                    // })}
                    className="input-form"
                  />
                  {/* {errors.name && (
                                    <p className="text-red-600 text-sm">This is required!!</p>
                                  )} */}
                </div>
                <div className="col-span-6">
                  <label
                    // htmlFor="company-website"
                    className="label-form"
                  >
                    Website
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                      http://
                    </span>
                    <input
                      type="text"
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                      // value={`${setValue('domain', getValues('name'), {shouldValidate: true})}.vercel.app`}
                      placeholder="example.com"
                      // {...register('domain')}
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <label className="label-form">Description</label>
                  <div className="mt-1">
                    <textarea
                      rows={3}
                      className="input-form"
                      // {...register('description')}
                    />
                  </div>
                </div>

                {/* {query.length === 2 && (
              <div className="col-span-6">
              <label className="label-form">Client name</label>
                <input
                  type="text"
                  className="input-form"
                />
              </div>
            )} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className=" group-button-form inset-x-0">
          <button type="submit" className="btn-primary ">
            {/* {site ? 'Update' : 'Created'}
                        {
                          isLoading ? '...' : null
                        } */}
            Create
          </button>
          <button
            type="button"
            className="btn-default"
            onClick={setLeft}
            // ref={cancelButtonRef}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
