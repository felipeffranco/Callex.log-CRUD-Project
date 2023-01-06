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
 
  useEffect(() =>{
    const apiCall = async () => {
        const res = await axios.get(apiEndpoint)
        setBanners(res.data)            
    }
    apiCall()
  }, [])

  const theBanner = banners.map((banner) => { 
    if(banner.imageUrl === "") { 
      return null; 
    }
    else {
      return (
        <>
          <div key={banner._id} className="flex flex-col flex-wrap gap-24 gap-y-1 mb-10 w-60">
            <img className="w-28 sm:w-96 h-24 sm:h-56 bg-cover mb-4 rounded-lg hover:grayscale border-0" alt="img" src={banner.imageUrl}></img>
            <h2 className="font-bold text-2xl text-emerald-300 mb-1">
              {banner.title}
            </h2>
            <p className="text-sm">
              {banner.description}
            </p> 
          </div>
        </>
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

        <div id="tabs" className="flex flex-wrap gap-24 gap-y-12 container text-white mb-32 px-20">
          {theBanner}
        </div>

        <div className="flex container flex-wrap gap-24 gap-y-12 px-20 mb-12">

          <div className="flex flex-col mr-10 mb-10 flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
              Fastest delivery<br></br> in Brazil
            </h2>
            <p className="text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. 
            </p>
          </div>
          
          <div className="flex flex-col mr-10 mb-10 flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
              Professional service
            </h2>
            <p className="text-gray-500">
            The service demands experience, ingenuity and professionalism from every level of management.
            </p>
          </div>
          
          <div className="flex flex-col mr-10 mb-10 flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
              Biggest ships<br></br>of the world
            </h2>
            <p className="text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. 
            </p>
          </div>
          
          <div className="flex flex-col flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
              Full ship<br></br>service
            </h2>
            <p className="text-gray-500">
            The service demands experience, ingenuity and professionalism from every level of management.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
