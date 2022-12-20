import './Homepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'

function Containers() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex min-h-screen">
        <div className="flex flex-col items-center container mt-5 px-10">

            <div className="container px-2 py-12 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR SERVICES</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
              <div className="flex flex-wrap -m-4 space-y-10">
                <div className="p-4 lg:w-1/2">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-white">Lorem Ipsum</h2>
                      <h3 className="text-gray-500 mb-3">Location, Location - LC</h3>
                      <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/2">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-white">Lorem Ipsum</h2>
                      <h3 className="text-gray-500 mb-3">Location, Location - LC</h3>
                      <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/2">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-white">Lorem Ipsum</h2>
                      <h3 className="text-gray-500 mb-3">Location, Location - LC</h3>
                      <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/2">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-white">Lorem Ipsum</h2>
                      <h3 className="text-gray-500 mb-3">Location, Location - LC</h3>
                      <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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

export default Containers;

