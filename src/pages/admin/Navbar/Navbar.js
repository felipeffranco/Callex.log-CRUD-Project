import { Fragment, useState } from 'react'
import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { navigation } from '../DB/navigation'
import { user } from '../DB/user'
import { userNavigation } from '../DB/userNavigation'

const Navbar = () => {

    const [clicked, setClicked] = useState()

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-bgPrimary">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Link to="/admin" className="text-3xl font-bold text-white mr-8 flex-none">
                                                callex
                                                <span className="text-emerald-300">.log</span>
                                            </Link>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.to}
                                                        className='text-gray-300 font-medium rounded-md py-2 px-4 hover:bg-emerald-300 hover:text-black'
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">

                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-offset-emerald-500">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-10 w-10 rounded-full border-2 border-emerald-300" src={user.imageUrl} alt="" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <Link
                                                                        to={item.to}
                                                                        className='flex rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-emerald-300 hover:text-black cursor-pointer'
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-emerald-300 hover:bg-emerald-200 p-2 text-black focus:ring-offset-gray-800">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>
                            <Disclosure.Panel className="sm:hidden">
                                <div className="flex flex-col space-y-1 px-2 pt-2 pb-3 sm:px-3 ">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            as="a"
                                            to={item.to}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-emerald-300 hover:text-black cursor-pointer"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pt-4 pb-3">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                as="a"
                                                to={item.to}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-emerald-300 hover:text-black cursor-pointer"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}

export default Navbar