import React from "react"
import Navbar from "../Navbar/Navbar"
import { useState, useEffect } from "react"
import axios, { Axios } from "axios"
import { useNavigate, Link, useParams } from "react-router-dom"

const Dashboard = () => {

    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [refresh, setRefresh] = useState(false)

    const navigate = useNavigate()
    const { itemId } = useParams()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/CL_homepage`)
            .then(response => {
                setData(response.data)
            })
            .catch(err => console.log(err))
    }, [refresh])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/CL_homepage/${itemId}`)
            .then(response => {

                let {
                    name,
                    title,
                    description,
                    imageUrl
                } = response.data

                setName(name)
                setTitle(title)
                setDescription(description)
                setImageUrl(imageUrl)
                setRefresh(!refresh)
            })
    }, [itemId])

    const newFormButton = e => {
        e.preventDefault()

        const newForm = {
            name,
            title,
            description,
            imageUrl
        }

        axios.post(`${process.env.REACT_APP_API_URL}/CL_homepage`, newForm)
            .then(response => {
                navigate('/admin')
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))

        setName('')
        setTitle('')
        setDescription('')
        setImageUrl('')
    }

    const clearButton = e => {
        e.preventDefault()

        setName('')
        setTitle('')
        setDescription('')
        setImageUrl('')
    }

    const editButton = e => {
        e.preventDefault()

        const updatedItem = {
            name,
            title,
            description,
            imageUrl
        }

        axios.put(`${process.env.REACT_APP_API_URL}/CL_homepage/${itemId}`, updatedItem)
        .then(response => {
            alert('Update Successfull')
            setRefresh(!refresh)
        })
        .catch(err => console.log(err))
    }

    const deleteButton = itemId => {
        axios.delete(`${process.env.REACT_APP_API_URL}/CL_homepage/${itemId}`)
            .then(response => {
                setRefresh(!refresh)
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
            <section>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
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
                                    <div className="space-y-5 bg-bgPrimary px-5 py-5 rounded-t-xl">
                                        <div>
                                            <label className="text-xl font-bold text-white">
                                                Name
                                            </label>
                                            <label className="mt-2 flex rounded-sm shadow-sm">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={name}
                                                    onChange={e => setName(e.target.value)}
                                                    className="form-input border-none focus:outline-none block w-full p-3 rounded-md bg-gray-900 bg-opacity-40 placeholder-gray-700 text-white"
                                                    placeholder="Enter your name" />
                                            </label>
                                        </div>
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
                                    <div className="flex justify-end bg-bgPrimary rounded-b-xl px-4 py-2 text-right sm:px-6">
                                        <button
                                            type="button"
                                            onClick={clearButton}
                                            className='text-white font-medium rounded-md mb-3 mr-3 py-2 px-4 bg-gray-900 hover:bg-gray-800'
                                        >
                                            Clear
                                        </button>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={editButton}
                                                className='text-black font-medium rounded-md mb-3 mr-3 py-2 px-4 bg-blue-300 hover:bg-blue-200'
                                            >
                                                Save Edit
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={newFormButton}
                                            className='text-black font-medium rounded-md mb-3 mr-3 py-2 px-4 bg-emerald-300 hover:bg-emerald-200'
                                        >
                                            Save new item
                                        </button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 px-4">
                <div className="sm:grid sm:grid-cols-1 sm:gap-6 bg-bgPrimary overflow-x-auto relative shadow-md rounded-lg border border-gray-700">
                    <table className="w-full text-sm text-center bg-bgPrimary dark:text-gray-400">
                        <thead className="text-md text-white capitalize bg-gray-900 bg-opacity-40 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="py-4 px-8">
                                    Name
                                </th>
                                <th className="py-4 px-8">
                                    Title
                                </th>
                                <th className="py-4 px-8">
                                    Description
                                </th>
                                <th className="py-4 px-8">
                                    Image
                                </th>
                                <th className="py-4 px-8">
                                    
                                </th>
                            </tr>
                        </thead>
                        {
                            data.length && data.map((item, _id) => {
                                return (
                                    <>
                                        <tbody>
                                            <tr className="text-white font-bold dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-800 bg-opacity-40 hover:text-black dark:hover:bg-gray-600">
                                                <th scope="row" className="py-4 px-6 font-bold dark:text-white">
                                                    {item.name}
                                                </th>
                                                <td className="py-4 px-6 font-medium">
                                                    {item.title}
                                                </td>
                                                <td className="py-4 px-6 font-light">
                                                    {item.description}
                                                </td>
                                                <td className="py-4 px-1">
                                                    <div className="w-40 m-auto">
                                                        <img src={item.imageUrl} alt="homepage-img" className="h-24 m-auto" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="space-x-3 flex justify-center align-middle mr-3 ml-3">
                                                        <Link to={`/admin/${item._id}/edit`}>
                                                            <button
                                                                type="submit"
                                                                className='text-black font-medium rounded-md mb-3 py-2 px-4 bg-blue-300 hover:bg-blue-200'
                                                            >
                                                                Edit
                                                            </button>
                                                        </Link>
                                                        <button
                                                            type="submit"
                                                            className='text-black font-medium rounded-md mb-3 py-2 px-4 bg-red-300 hover:bg-red-200'
                                                            onClick={() => deleteButton(item._id)}>
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </>
                                )
                            })
                        }
                    </table>
                </div>
            </section>
        </>
    )
}

export default Dashboard