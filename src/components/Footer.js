import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <footer class="p-4 bg-bgPrimary rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
          <div class="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="text-xl font-bold text-white flex-none">
              callex
              <span className="text-emerald-300">.log</span>
            </Link>
            <ul class="flex flex-wrap items-center mt-6 mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to='/' className="text-sm text-gray-500 mr-4 hover:text-emerald-300 hover:border-b-2 hover:border-emerald-300 transition-all ease-linear">Home</Link>
              </li>
              <li>
                <Link to='/about-us' className="text-sm text-gray-500 mr-4 hover:text-emerald-300 hover:border-b-2 hover:border-emerald-300 transition-all ease-linear">About Us</Link>
              </li>
              <li>
                <Link to='/containers' className="text-sm text-gray-500 mr-4 hover:text-emerald-300 hover:border-b-2 hover:border-emerald-300 transition-all ease-linear">Containers</Link>
              </li>
              <li>
                <Link to='/services' className="text-sm text-gray-500 mr-4 hover:text-emerald-300 hover:border-b-2 hover:border-emerald-300 transition-all ease-linear">Services</Link>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-emerald-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Developed By: <a href='https://github.com/lukasbiscaro' target='blank' className='hover:underline hover:text-emerald-300 font-bold'>Lukas Biscaro</a> e <a href='https://github.com/felipeffranco' target='blank' className='hover:underline hover:text-emerald-300 font-bold'>Felipe Franco</a></span>
        </footer>

      </div>
    </footer>
  );
}

export default Footer;

