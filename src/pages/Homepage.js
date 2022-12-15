import './Homepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className="flex flex-col">
        <Navbar />

        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col items-center container mt-20 px-20">
            <h1 className="text-7xl font-bold text-white text-center leading-tight">
              Reduce quoting time by <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-emerald-400">90%</span><br></br>
              and freight spend by <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-emerald-400">20%</span>
            </h1>
            <h2 className="text-2xl mt-6 px-60 text-white text-center leading-snug">
              Procure freight faster by standardizing and automating the process of requesting quotes, comparing rates, and booking freight.
            </h2>
            <Link className="mt-12 px-24 py-6 text-2xl rounded-xl bg-gradient-to-r from-lime-200 to-emerald-400 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-lime-200 transition-all ease-linear" to="/modal">
              Talk with us
            </Link>
          </div>
          <div className="flex flex-col items-center container mt-20 px-20">

          </div> 
        </div>

        <Footer />
    </div>
  );
}

export default Homepage;

 