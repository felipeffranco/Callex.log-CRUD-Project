import React from "react";
import "./Homepage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Trusted1 from "./img/cloudflare.svg";
import Trusted2 from "./img/codecademy.svg";
import Trusted3 from "./img/apple.svg";
import Trusted4 from "./img/jp-morgan.svg";
import Trusted5 from "./img/razer.svg";
import Trusted6 from "./img/google.svg";

import axios from "axios";
const apiEndpoint = "https://ironrest.cyclic.app/CL_homepage";

const Homepage = () => {

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
      )
    }
  })

  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col items-center container mt-10 sm:mt-20 mb-20 px-8 sm:px-20">
          <h1 className="sm:text-7xl font-bold text-white text-center leading-tight text-2xl">
            Reduce quoting time by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-emerald-400">
              90%
            </span>
            <br></br>
            and freight spend by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-emerald-400">
              20%
            </span>
          </h1>
          <h2 className="sm:text-2xl text-sm mt-6 sm:px-60 px-8 text-white text-center leading-snug">
            Your freight faster by standardizing and automating the process
            of requesting quotes, comparing rates, and booking freight.
          </h2>
          <Link
            className="mt-12 sm:px-24 px-14 sm:py-6 py-4 sm:text-2xl text-lg rounded-xl bg-gradient-to-r from-lime-200 to-emerald-400 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-lime-200 transition-all ease-linear"
            to="#"
          >
            Talk with us
          </Link>
        </div>
        <div className="flex flex-col items-center container mb-32 px-20 text-gray-500 text-center">
          <h4 className="mb-6">Trusted by the world’s leading organizations</h4>
          <ul className="flex justify-center items-center flex-wrap">
            <li className="flex w-auto mb-10 px-10 flex-auto justify-center items-center">
              <img
                src={Trusted1}
                alt="img1"
                className="grayscale w-40 h-20"
              ></img>
            </li>
            <li className="flex w-auto mb-10 px-10 flex-auto justify-center items-center">
              <img
                src={Trusted2}
                width="150"
                heigth="150"
                alt="img2"
                className="grayscale"
              ></img>
            </li>
            <li className="flex w-auto mb-10 px-10 flex-auto justify-center items-center">
              <img
                src={Trusted3}
                width="50"
                heigth="50"
                alt="img3"
                className="grayscale"
              ></img>
            </li>
            <li className="flex w-auto mb-10 px-10 flex-auto justify-center items-center">
              <img
                src={Trusted4}
                width="150"
                heigth="150"
                alt="img4"
                className="grayscale"
              ></img>
            </li>
            <li className="flex w-auto mb-10 px-10 flex-auto justify-center items-center">
              <img
                src={Trusted5}
                width="150"
                heigth="150"
                alt="img5"
                className="grayscale"
              ></img>
            </li>
            <li className="flex w-auto mb-10 px-10">
              <img
                src={Trusted6}
                width="150"
                heigth="150"
                alt="img6"
                className="grayscale"
              ></img>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="sm:text-6xl text-3xl font-bold text-white text-center leading-tight">
            Our {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-emerald-400">
              best services
            </span>
          </h2>
        </div>
        {
          loading
            ?
            <div className='text-white'>
              <div className="mx-auto max-w-2xl py-4 px-4 sm:py-8 sm:px-6 lg:max-w-full lg:px-8">
                <div className="mb-32 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
                  {
                    theBanner
                  }
                </div>
              </div>
            </div>
            :
            <>
              <div className="flex justify-center items-center my-4">
                <svg aria-hidden="true" className="mr-2 w-12 h-12 text-gray-800 animate-spin dark:text-gray-600 fill-emerald-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
              </div>
            </>
        }
        <div className='text-white'>
          <div className="mx-auto max-w-2xl py-4 px-4 sm:py-8 sm:px-6 lg:max-w-full lg:px-8">
            <div className="mb-32 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
              <div className="group relative">
                <div className="mt-4 flex flex-col justify-between">
                  <div className='flex flex-auto'>
                    <h3 className="font-bold text-4xl text-white mb-5">
                      Fastest delivery in Brazil
                    </h3>
                  </div>
                  <p className="text-md font-medium">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards.</p>
                </div>
              </div>
              <div className="group relative">
                <div className="mt-4 flex flex-col justify-between">
                  <div className='flex flex-auto'>
                    <h3 className="font-bold text-4xl text-white mb-5">
                      Professional service
                    </h3>
                  </div>
                  <p className="text-md font-medium">The service demands experience, ingenuity and professionalism from every level of management.</p>
                </div>
              </div>
              <div className="group relative">
                <div className="mt-4 flex flex-col justify-between">
                  <div className='flex flex-auto'>
                    <h3 className="font-bold text-4xl text-white mb-5">
                      Biggest ships of the world
                    </h3>
                  </div>
                  <p className="text-md font-medium">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards.</p>
                </div>
              </div>
              <div className="group relative">
                <div className="mt-4 flex flex-col justify-between">
                  <div className='flex flex-auto'>
                    <h3 className="font-bold text-4xl text-white mb-5">
                      Full ship service
                    </h3>
                  </div>
                  <p className="text-md font-medium">The service demands experience, ingenuity and professionalism from every level of management.</p>
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

export default Homepage;
