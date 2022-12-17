import React from "react";
import "./Homepage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

import Trusted1 from "./img/cloudflare.svg";
import Trusted2 from "./img/codecademy.svg";
import Trusted3 from "./img/apple.svg";
import Trusted4 from "./img/jp-morgan.svg";
import Trusted5 from "./img/razer.svg";
import Trusted6 from "./img/google.svg";

import axios from "axios";
const apiEndpoint = "https://ironrest.cyclic.app/CL_homepage"

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % apiEndpoint.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? apiEndpoint.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.imageUrl}')`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.imageUrl}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.name}</h2>
          <h3 className="slideSubtitle">{slide.title}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}






const Homepage = () => {

  const [banners, setBanners] = useState([])

  useEffect(() =>{
    const apiCall = async () => {
        const res = await axios.get(apiEndpoint)
        setBanners(res.data)            
    }
    apiCall()
  }, [])
/*
  const theBanner = banners.map((banner) => { 
    return (
      <>
        <h1>key={banner._id}</h1>
        <h2>{banner.name}</h2>
        <h3>{banner.title}</h3>
        <h4>{banner.description}</h4>
        <h5>{banner.image_url}</h5>
      </>
    )
  })
*/

  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col items-center container mt-20 px-20">
          <h1 className="text-7xl font-bold text-white text-center leading-tight">
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
          <h2 className="text-2xl mt-6 px-60 text-white text-center leading-snug">
            Your freight faster by standardizing and automating the process
            of requesting quotes, comparing rates, and booking freight.
          </h2>
          <Link
            className="mt-12 px-24 py-6 text-2xl rounded-xl bg-gradient-to-r from-lime-200 to-emerald-400 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-lime-200 transition-all ease-linear"
            to="/modal"
          >
            Talk with us
          </Link>
        </div>
        <div className="flex flex-col items-center container mt-20 px-20 text-gray-500">
          <h4 className="mb-6">Trusted by the world’s leading organizations</h4>
          <ul className="flex mb-20 justify-center items-center">
            <li className="mr-10">
              <img
                src={Trusted1}
                width="150"
                heigth="150"
                alt="img1"
                className="grayscale"
              ></img>
            </li>
            <li className="mr-10">
              <img
                src={Trusted2}
                width="150"
                heigth="150"
                alt="img2"
                className="grayscale"
              ></img>
            </li>
            <li className="mr-10">
              <img
                src={Trusted3}
                width="50"
                heigth="50"
                alt="img3"
                className="grayscale"
              ></img>
            </li>
            <li className="mr-10">
              <img
                src={Trusted4}
                width="150"
                heigth="150"
                alt="img4"
                className="grayscale"
              ></img>
            </li>
            <li className="mr-10">
              <img
                src={Trusted5}
                width="150"
                heigth="150"
                alt="img5"
                className="grayscale"
              ></img>
            </li>
            <li>
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

        <div id="tabs" className="text-center flex flex-col container mb-20 px-20 text-gray-300">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
            {/*theBanner*/}

            <div className="slides">
              <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

              {[...apiEndpoint, ...apiEndpoint, ...apiEndpoint].map((slide, i) => {
                let offset = apiEndpoint.length + (state.slideIndex - i);
                return <Slide slide={slide} offset={offset} key={i} />;
              })}
              <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
            </div>
          </h2>
        </div>

        <div className="flex container mb-20 px-20">
          <div className="flex flex-col mr-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
              Fastest delivery<br></br> in Brazil
            </h2>
            <p className="text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. 
            </p>
          </div>
          <div className="flex flex-col mr-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
              Professional service
            </h2>
            <p className="text-gray-500">
            The service demands experience, ingenuity and professionalism from every level of management.
            </p>
          </div>
          <div className="flex flex-col mr-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
              Biggest ships<br></br>of the world
            </h2>
            <p className="text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. 
            </p>
          </div>
          <div className="flex flex-col">
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
