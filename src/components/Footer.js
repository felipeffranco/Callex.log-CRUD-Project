import './Navbar.css';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <nav className="flex flex-col justify-center items-center">
          <Link to="/" className="text-xl font-bold text-white flex-none mb-2">
            callex
            <span className="text-emerald-300">.log</span>
          </Link>
          <div className="m-2 mb-12 flex-auto grow justify-center content-center">
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
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

 