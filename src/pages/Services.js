import './Homepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import axios from "axios";
import { useState, useEffect } from 'react';

const apiEndpoint = "https://ironrest.cyclic.app/CL_homepage";

function Services() {

  const [banners, setBanners] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios.get(apiEndpoint)
      setBanners(res.data)
      setLoading(true)
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
            {
              loading
                ?
                <div className='text-white'>
                  <div className="mx-auto max-w-2xl py-4 px-4 sm:py-8 sm:px-6 lg:max-w-full lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
                      {
                        theBanner
                      }
                    </div>
                  </div>
                </div>
                :
                <>
                  <div className="flex justify-center items-center my-4 mt-40">
                    <svg aria-hidden="true" className="mr-2 w-12 h-12 text-gray-800 animate-spin dark:text-gray-600 fill-emerald-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                  </div>
                </>
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;

