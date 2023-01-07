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
          <div key={banner._id} className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className='flex flex-auto'>
                <h3 className="font-bold text-2xl text-emerald-300 mb-1">
                  {banner.title}
                </h3>
              </div>
              <p className="text-md font-medium">{banner.description}</p>
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
            <div className="flex flex-col text-center w-full mb-8">
              <h2 className="sm:text-6xl text-3xl font-bold text-white text-center leading-tight mb-8">
                Our {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-emerald-400">
                  services
                </span>
              </h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className='text-white'>
              <div className="mx-auto max-w-2xl py-4 px-4 sm:py-8 sm:px-6 lg:max-w-full lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
                  {
                    theBanner
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;

