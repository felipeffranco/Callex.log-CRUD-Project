import React from "react"
import Navbar from "../Navbar/Navbar"

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

                    <div className="px-4 py-6 sm:px-0">
                        <div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-6">
                                <div className="sm:col-span-1">
                                    <div className="px-4 sm:px-0">
                                        <h3 className="text-4xl leading-6 text-emerald-300">Home Page</h3>
                                        <p className="mt-6 mb-6 text-lg text-white">
                                            This page will be able to edit all the informations about the Home Page as like, title, description and image.
                                        </p>
                                    </div>
                                </div>
                                <div className="sm:col-span-2 sm:mt-0 border border-gray-700 rounded-xl">
                                    <form>
                                        <div>
                                            <div className="space-y-5 bg-bgPrimary px-5 py-5 rounded-t-xl  ">
                                                <div>
                                                    <div>
                                                        <label className="text-xl font-bold text-white">
                                                            Title
                                                        </label>
                                                        <label className="mt-2 flex rounded-sm shadow-sm">
                                                            <textarea rows="2" class="block w-full p-3 border rounded-md focus:outline-none bg-gray-900 bg-opacity-40 border-gray-700 placeholder-gray-700 text-white focus:border-emerald-300"
                                                                placeholder="Enter your new title..." />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="text-xl font-bold text-white">
                                                        Description
                                                    </label>
                                                    <label className="mt-2 flex rounded-sm shadow-sm">
                                                        <textarea rows="1" class="block w-full p-3 border rounded-md focus:outline-none bg-gray-900 bg-opacity-40 border-gray-700 placeholder-gray-700 text-white focus:border-emerald-300"
                                                            placeholder="Enter your new description..." />
                                                    </label>
                                                </div>

                                                <div>
                                                    <label className="text-xl font-bold text-white">Image</label>
                                                    <label>
                                                        <input type="file" className="sr-only" />
                                                        <div className="mt-2 flex justify-center rounded-xl border-2 border-dashed border-gray-700 bg-gray-900 bg-opacity-40 hover:border-emerald-300 cursor-pointer pt-4 pb-4 text-gray-700 hover:text-emerald-300">
                                                            <div className="space-y-1 text-center">
                                                                <svg

                                                                    className="mx-auto h-10 w-10"
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
                                                                <div className="flex text-md">
                                                                    <p className="cursor-pointer">Upload a file or drag and drop</p>
                                                                </div>
                                                                <p className="text-sm">PNG, JPG, GIF up to 10MB</p>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="bg-bgPrimary rounded-b-xl px-4 py-3 text-right sm:px-6">
                                                <button
                                                    type="submit"
                                                    className=" rounded-xl border border-emerald-300 bg-transparent py-2 px-10 text-xl font-bold text-emerald-300 hover:bg-emerald-300 hover:text-black focus:outline-none"
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
