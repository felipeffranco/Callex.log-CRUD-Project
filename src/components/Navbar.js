import '../pages/admin/DB/navigationHome'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigationHome } from '../pages/admin/DB/navigationHome';

function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

    <div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link to="/" className="sm:text-3xl sm:mt-0 text-lg mt-4 font-bold text-white mr-8 flex-none">
                callex
                <span className="text-emerald-300">.log</span>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigationHome.map((item) => (
                <Link key={item.name} to={item.to} className="text-sm text-white mr-4 hover:text-emerald-300 hover:border-b-2 hover:border-emerald-300 transition-all ease-linear">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <Link to="/admin" className="text-sm uppercase text-emerald-300 hover:bg-emerald-600 hover:text-white border-solid border p-1.5 sm:p-2 sm:px-8 rounded-xl border-emerald-300 hover:border-emerald-600 transition-all ease-linear">
                Admin
              </Link>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-bgPrimary px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                  <Link to="/" className="sm:text-3xl sm:mt-0 text-lg mt-4 font-bold text-white mr-8 flex-none">
                    callex
                    <span className="text-emerald-300">.log</span>
                  </Link>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {navigationHome.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-emerald-300 hover:text-black cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 sm:mt-2 sm:mr-4 mr-0">
                  <Link to="/admin" className="text-sm uppercase text-emerald-300 hover:bg-emerald-600 hover:text-white border-solid border p-1.5 sm:p-2 sm:px-8 rounded-xl border-emerald-300 hover:border-emerald-600 transition-all ease-linear">
                    Admin
                  </Link>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

