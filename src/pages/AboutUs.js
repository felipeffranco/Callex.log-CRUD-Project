import React from 'react';
import GoogleMapReact from 'google-map-react';

import './Homepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Trusted6 from "./img/about-us.jpg";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
}

function AboutUs() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mb-40">
        <div className="flex flex-col items-center container mt-20 px-20">
          <div className="relative">
            <div className="relative mx-auto max-w-container px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
              <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col lg:pb-6">
                  <h1 className="mt-4 text-4xl font-extrabold leading-none tracking-tight text-emerald-300 sm:text-5xl sm:leading-[3.5rem]">
                    Callex Log
                  </h1>
                  <p className="order-first text-base font-semibold leading-7 text-gray-500">
                    export with us
                  </p>
                  <p className="mt-6 text-base leading-7 text-gray-300">
                    We offer the best solutions for exporting your goods
                    Callex has a team specialized in exports, ready to provide full support to companies that wish to access the foreign market with total security and lower cost, observing all tax exemptions inherent to exports, guaranteed by law.
                  </p>
                </div>
                <div className="relative lg:col-span-2 background-cover">
                  <img src={Trusted6} alt="img" className="relative z-20 -mb-36 aspect-[853/482] max-w-[853px] rounded-xl sm:-mb-16 lg:-mb-8 xl:-mb-16"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex container mb-32 px-20 flex-wrap sm:flex-nowrap">
          <div className="flex flex-2 flex-col mr-10 mb-10 flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
              São Paulo
            </h2>
            <p className="text-gray-500 mb-4">
              Rua Vergueiro, 2045 – 13º andar – cjs 1304 /1306 – Vila Mariana - São Paulo – SP
            </p>
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter="
                  center: {
                    lat: 10.99835602,
                    lng: 77.01502627
                  }" 
                defaultZoom="zoom: 11"
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
          
          <div className="flex flew-2 flex-col mr-10 mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
              Santos
            </h2>
            <p className="text-gray-500 mb-4">
              Rua Brás Cubas, 37 – 4º andar – cj 43 – Centro - Santos – SP
            </p>
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter="
                  center: {
                    lat: 10.99835602,
                    lng: 77.01502627
                  }" 
                defaultZoom="zoom: 11"
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default AboutUs;

