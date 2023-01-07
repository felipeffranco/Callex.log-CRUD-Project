import './Homepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { containers } from '../pages/admin/DB/containers';

function Containers() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex min-h-screen">
        <div className="flex flex-col items-center container mt-5 px-10">
          <div className="container px-2 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <h2 className="sm:text-6xl text-3xl font-bold text-white text-center leading-tight mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-emerald-400">
                  Containers
                </span>
              </h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>

            <div className="sm:grid sm:grid-cols-1 sm:gap-6 bg-bgPrimary overflow-x-auto relative shadow-md rounded-lg border border-gray-700">
              <table className="w-full text-sm text-center bg-bgPrimary dark:text-gray-400">
                <thead className="text-md text-white capitalize bg-gray-900 bg-opacity-40 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="py-4 px-8">
                      Date
                    </th>
                    <th className="py-4 px-8">
                      Hour
                    </th>
                    <th className="py-4 px-8">
                      ETA
                    </th>
                    <th className="py-4 px-8">
                      Place
                    </th>
                    <th className="py-4 px-8">
                      Ship
                    </th>
                    <th className="py-4 px-8">
                      Cargo
                    </th>
                    <th className="py-4 px-8">
                      Event
                    </th>
                    <th className="py-4 px-8">
                      Voyage
                    </th>
                    <th className="py-4 px-8">
                      DUV
                    </th>
                  </tr>
                </thead>      
                <tbody>
                  {
                    containers.map((item) => (
                      <tr className="text-white font-bold dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-800 bg-opacity-40 hover:text-black dark:hover:bg-gray-600">
                        <td className="py-4 px-6 font-medium">
                          {item.date}
                        </td>
                        <td className="py-4 px-6 font-medium">
                          {item.hour}
                        </td>
                        <td className="py-4 px-6 font-medium">
                          {item.eta}
                        </td>
                        <td className="py-4 px-6 font-medium">
                          {item.place} 
                        </td>
                        <td className="py-4 px-6 font-medium">
                          {item.ship}
                        </td>
                        <td className="py-4 px-6 font-medium">
                          {item.cargo}
                        </td>
                        <td className="py-4 px-6 font-medium">
                          {item.event}
                        </td>
                        <td className="py-4 px-6 font-medium">
                          {item.voyage}
                        </td>
                        <td className="py-4 px-6 font-medium">
                          {item.duv}
                        </td>
                      </tr>
                    )) 
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Containers;

