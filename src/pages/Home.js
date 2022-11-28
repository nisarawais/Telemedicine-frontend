import React from "react";

import { CheckIcon } from '@heroicons/react/24/outline'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkSquareIcon,
    CalendarIcon,
    LifebuoyIcon,
    ShieldCheckIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'


const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: LifebuoyIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkSquareIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]

const features = [
    {
        name: 'Appointment Booking',
        description:
            'Book appointments with ease',
    },
    {
        name: 'Messaging',
        description: 'Communicate with patients easily with a built in messaging system',
    },
    {
        name: 'File Upload',
        description:
            'Upload patient files with ease and store them on the cloud',
    },
    {
        name: 'Secure',
        description:
            'Security guaranteed with state of the art authentication',
    },
]

const Home = () => {
  return (
      <>
          <div className="relative bg-gray-50">
              <Popover className="relative bg-white shadow">
                  <Transition
                      as={Fragment}
                      enter="duration-200 ease-out"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="duration-100 ease-in"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                  >
                      <Popover.Panel
                          focus
                          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                      >
                          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="px-5 pt-5 pb-6">
                                  <div className="flex items-center justify-between">
                                      <div>
                                          <img
                                              className="h-8 w-auto"
                                              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                              alt="Your Company"
                                          />
                                      </div>
                                      <div className="-mr-2">
                                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                              <span className="sr-only">Close menu</span>
                                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                          </Popover.Button>
                                      </div>
                                  </div>
                                  <div className="mt-6">
                                      <nav className="grid gap-y-8">
                                          {features.map((item) => (
                                              <a
                                                  key={item.name}
                                                  href={item.href}
                                                  className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                              >
                                                  <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                                  <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                              </a>
                                          ))}
                                      </nav>
                                  </div>
                              </div>
                              <div className="space-y-6 py-6 px-5">
                                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                      <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                          Pricing
                                      </a>

                                      <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                          Docs
                                      </a>
                                      {resources.map((item) => (
                                          <a
                                              key={item.name}
                                              href={item.href}
                                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                                          >
                                              {item.name}
                                          </a>
                                      ))}
                                  </div>
                                  <div>
                                      <a
                                          href="#"
                                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                      >
                                          Sign up
                                      </a>
                                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                                          Existing customer?
                                          <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                              Sign in
                                          </a>
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </Popover.Panel>
                  </Transition>
              </Popover>

              <main className="lg:relative">
                  <div className="mx-16 w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
                      <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                          <h1 className="text-4xl font-bold leading-loose text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                              <span className="block xl:inline uppercase">Ontario's #1 best health services for remote patients and healthcare providers</span>{' '}
                          </h1>
                      </div>
                  </div>
                  <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                      <img
                          className="absolute inset-0 h-full w-full object-cover"
                          src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80"
                          alt=""
                      />
                  </div>
              </main>
          </div>
          <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-600">
                        Our platform comes with all the features needed to run your practice
                    </p>
                </div>
                <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative">
                            <dt>
                                <CheckIcon className="absolute mt-1 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                            </dt>
                            <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
          </div>
      </>
  )
};

export default Home;
