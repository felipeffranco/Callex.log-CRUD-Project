import './Navbar.css';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function Navbar() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div>
      <div className="container mx-auto">
        <nav className="flex mx-3 my-3">
          <Link to="/" className="text-3xl font-bold text-white mr-8 flex-none">
            callex
            <span className="text-emerald-300">.log</span>
          </Link>
          <div className="mt-2 flex-auto grow">
            <Link to="/" className="text-sm text-white mr-4 hover:text-emerald-300 hover:border-b-2 hover:border-emerald-300 transition-all ease-linear">
              Home
            </Link>
            <Link to="/about-us" className="text-sm text-white mr-4 hover:text-emerald-300 hover:border-b-2 hover:border-emerald-300 transition-all ease-linear">
              About us
            </Link>
            <Link to="/containers" className="text-sm text-white mr-4 hover:text-emerald-300 hover:border-b-2 hover:border-emerald-300 transition-all ease-linear">
              Containers
            </Link>
            <Link to="/services" className="text-sm text-white hover:text-emerald-300 hover:border-b-2 hover:border-emerald-300 transition-all ease-linear">
              Services
            </Link>
          </div>
          <div className="mt-2">
            <Link to="/admin" className="text-sm uppercase text-emerald-300 hover:bg-emerald-600 hover:text-white border-solid border p-2 px-8 rounded-xl border-emerald-300 hover:border-emerald-600 transition-all ease-linear">
              Login
            </Link>
          </div>
          <div className="py-1">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
                relative inline-flex h-[28px] w-[55px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                  pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

 