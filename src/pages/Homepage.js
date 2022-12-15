import './Homepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import Trusted1 from './img/cloudflare.svg';
import Trusted2 from './img/codecademy.svg';
import Trusted3 from './img/apple.svg';
import Trusted4 from './img/jp-morgan.svg';
import Trusted5 from './img/razer.svg';
import Trusted6 from './img/google.svg';

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

          <div className="flex flex-col items-center container mt-20 px-20 text-gray-300">
            <h4 className="mb-6">Trusted by the world’s leading organizations</h4>
            <ul className="flex mb-20 justify-center items-center">
              <li className="mr-16">
                <img src={Trusted1} width="150" heigth="150" alt="img1" className="fill-gray-50"></img>
              </li>
              <li className="mr-16">
                <img src={Trusted2} width="150" heigth="150" alt="img2" className="grayscale"></img>
              </li>
              <li className="mr-16">
                <img src={Trusted3} width="50" heigth="50" alt="img3" className="grayscale"></img>
              </li>
              <li className="mr-16">
                <img src={Trusted4} width="150" heigth="150" alt="img4" className="grayscale"></img>
              </li>
              <li className="mr-16">
                <img src={Trusted5} width="150" heigth="150" alt="img5" className="grayscale"></img>
              </li>
              <li className="flex">
                <img src={Trusted6} width="150" heigth="150" alt="img6" className="grayscale"></img>
              </li>
            </ul>
          </div> 

          <div className="flex flex-col items-center container mt-20 px-20 text-gray-300">

          </div>
        </div>

        <Footer />
    </div>
  );
}

export default Homepage;

 