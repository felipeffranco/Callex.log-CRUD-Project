import './Homepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Service1 from "./img/service1.jpg";
import Service2 from "./img/service2.jpg";
import Service3 from "./img/service3.jpg";
import Service4 from "./img/service4.jpg";

function Services() {
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
              <div className="p-4 w-5/12">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Service1} />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="font-bold text-2xl text-emerald-300 mb-1">
                      Lorem Ipsum
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                      Location, Location - LC
                    </h3>
                    <p className="mb-4 text-white">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 w-5/12">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Service2} />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="font-bold text-2xl text-emerald-300 mb-1">
                      Lorem Ipsum
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                      Location, Location - LC
                    </h3>
                    <p className="mb-4 text-white">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 w-5/12">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Service3} />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="font-bold text-2xl text-emerald-300 mb-1">
                      Lorem Ipsum
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                      Location, Location - LC
                    </h3>
                    <p className="mb-4 text-white">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 w-5/12">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Service4} />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="font-bold text-2xl text-emerald-300 mb-1">
                      Lorem Ipsum
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                      Location, Location - LC
                    </h3>
                    <p className="mb-4 text-white">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
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

