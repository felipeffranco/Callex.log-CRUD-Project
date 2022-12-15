import './Homepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'

function Containers() {
  return (
    <div className="flex flex-col">
        <Navbar />

        <div className="flex min-h-screen">
          <div className="flex flex-col items-center container mt-20 px-20">
            
          </div>
        </div>

        <Footer />
    </div>
  );
}

export default Containers;

 