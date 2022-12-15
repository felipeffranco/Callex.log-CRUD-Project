import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <header className="bg-bgPrimary shadow border-b border-emerald-300 border-opacity-50">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                        <div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-6">
                                <div className="sm:col-span-1">
                                    <div className="px-4 sm:px-0">
                                        <h3 className="text-4xl leading-6 text-emerald-300">Home Page</h3>
                                        <p className="mt-6 text-lg text-white">
                                            This page will be able to edit all the informations about the Home Page as like, title, description and image.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-5 sm:col-span-2 sm:mt-0 border border-gray-700 rounded-xl">
                                    <form>
                                        <div>
                                            <div className="space-y-10 bg-bgPrimary px-5 py-5 rounded-xl ">
                                                <div>
                                                    <div>
                                                        <label className="text-xl font-bold text-white">
                                                            Title:
                                                        </label>
                                                        <div className="mt-2 flex rounded-sm shadow-sm">
                                                            <input
                                                                type="text"
                                                                name="title"
                                                                class="block w-full p-6 border rounded-md focus:outline-none bg-gray-900 bg-opacity-40 border-gray-700 placeholder-gray-700 text-white focus:border-emerald-300"
                                                                placeholder="Enter your new title..."
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="text-xl font-bold text-white">
                                                        Description:
                                                    </label>
                                                    <div className="mt-2 flex rounded-sm shadow-sm">
                                                        <input
                                                            type="text"
                                                            name="description"
                                                            class="block w-full p-5 border rounded-md focus:outline-none bg-gray-900 bg-opacity-40 border-gray-700 placeholder-gray-700 text-white focus:border-emerald-300"
                                                            placeholder="Enter your new title..."
                                                        />
                                                    </div>
                                                    {/* <p className="mt-2 text-sm text-gray-500">
                                                        Brief description for your profile. URLs are hyperlinked.
                                                    </p> */}
                                                </div>

                                                {/* <div>
                                                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                                                    <div className="mt-1 flex items-center">
                                                        <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                            </svg>
                                                        </span>
                                                        <button
                                                            type="button"
                                                            className="ml-5 rounded-sm border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        >
                                                            Change
                                                        </button>
                                                    </div>
                                                </div> */}

                                                <div>
                                                    <label className="text-xl font-bold text-white">Side Image:</label>
                                                    <div className="mt-2 flex justify-center rounded-xl border-2 border-dashed border-gray-700 bg-gray-900 bg-opacity-40 hover:border-emerald-300 cursor-pointer pt-16 pb-16 text-gray-700 hover:text-emerald-300">
                                                        <div className="space-y-1 text-center">
                                                            <svg
                                                                className="mx-auto h-16 w-16"
                                                                stroke="currentColor"
                                                                fill="none"
                                                                viewBox="0 0 48 48"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                            <div className="flex text-lg ">
                                                                <h1>Upload a file or drag and drop</h1>
                                                            </div>
                                                            <p className="text-md">PNG, JPG, GIF up to 10MB</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-bgPrimary rounded-b-xl px-4 py-3 text-right sm:px-6">
                                                <button
                                                    type="submit"
                                                    className="flex rounded-xl border border-emerald-300 bg-transparent py-2 px-10 text-xl font-bold text-emerald-300 hover:bg-emerald-300 hover:text-black focus:outline-none"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard
