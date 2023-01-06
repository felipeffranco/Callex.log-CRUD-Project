import './Homepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import axios from "axios";
import { useState, useEffect } from 'react';

const apiEndpoint = "https://ironrest.cyclic.app/CL_homepage";

function Services() {

  const [banners, setBanners] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios.get(apiEndpoint)
      setBanners(res.data)
    }
    apiCall()
  }, [])

  const theBanner = banners.map((banner) => {
    if (banner.imageUrl === "") {
      return null;
    }
    else {
      return (
        <>

          <div key={banner._id} className="p-4 w-5/12">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={banner.imageUrl} />
              <div className="flex-grow sm:pl-8">
                <h2 className="font-bold text-2xl text-emerald-300 mb-1">
                  {banner.title}
                </h2>
                <p className="mb-4 text-white">
                  {banner.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )
    }
  })

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex min-h-screen">
        <div className="flex flex-col items-center container mt-5 px-10">
          <div className="container px-2 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="sm:text-6xl text-3xl font-bold text-white text-center leading-tight mb-4">
                Our {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-emerald-400">
                  services
                </span>
              </h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="flex flex-wrap gap-24 gap-y-12">
              {
                theBanner
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;

