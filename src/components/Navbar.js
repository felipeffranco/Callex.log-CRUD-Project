import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
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
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

 