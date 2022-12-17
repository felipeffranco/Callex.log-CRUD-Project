import './Homepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Trusted6 from "./img/about-us.jpg";

function AboutUs() {
  return (
    <div className="flex flex-col">
        <Navbar />

        <div className="flex min-h-screen">
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
                    <img src={Trusted6} alt="img" width="1600" height="1280" className="relative z-20 -mb-36 aspect-[853/482] max-w-[853px] rounded-xl sm:-mb-16 lg:-mb-8 xl:-mb-16"></img>
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

export default AboutUs;

 