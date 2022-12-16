import React from "react"
import Navbar from "../Navbar/Navbar"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        const newEdit = {
            title,
            description,
            imageUrl
        }

        axios.post(`${process.env.REACT_APP_API_URL}/CL_homepage`, newEdit)
            .then(response => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

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
                                    <form onSubmit={handleSubmit}>
                                        <div className="space-y-5 bg-bgPrimary px-5 py-5 rounded-t-xl">
                                            <div>
                                                <label className="text-xl font-bold text-white">
                                                    Title
                                                </label>
                                                <label className="mt-2 flex rounded-sm shadow-sm">
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        value={title}
                                                        onChange={e => setTitle(e.target.value)}
                                                        className="form-input border-none focus:outline-none block w-full p-3 rounded-md bg-gray-900 bg-opacity-40 placeholder-gray-700 text-white"
                                                        placeholder="Enter your new title..." />
                                                </label>
                                            </div>
                                            <div>
                                                <label className="text-xl font-bold text-white">
                                                    Description
                                                </label>
                                                <label className="mt-2 flex rounded-sm shadow-sm">
                                                    <input
                                                        type="text"
                                                        id="description"
                                                        value={description}
                                                        onChange={e => setDescription(e.target.value)}
                                                        className="form-input border-none focus:outline-none block w-full p-3 mb-5 rounded-md bg-gray-900 bg-opacity-40 placeholder-gray-700 text-white"
                                                        placeholder="Enter your new description..." />
                                                </label>
                                            </div>
                                            <div className="flex mt-5">
                                                <span className="inline-flex items-center px-3 text-sm text-white font-bold bg-gray-700 border border-r-0 border-gray-700 border-transparente rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                                    Image
                                                </span>
                                                <input 
                                                    type="text" 
                                                    id="website-admin"
                                                    value={imageUrl}
                                                    onChange={e => setImageUrl(e.target.value)}
                                                    className="w-full border-none rounded-none focus:outline-none rounded-r-lg bg-gray-900 bg-opacity-40 placeholder-gray-700 text-white"
                                                    placeholder="https://example.com"
                                                    />
                                            </div>
                                        </div>
                                        <div className="bg-bgPrimary rounded-b-xl px-4 py-2 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className=" rounded-xl border border-emerald-300 bg-transparent mb-3 py-2 px-10 text-xl font-bold text-emerald-300 hover:bg-emerald-300 hover:text-black focus:outline-none"
                                            >
                                                Edit
                                            </button>
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
