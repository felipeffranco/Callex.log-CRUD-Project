import React, { useState } from "react";
import { HiOutlineCloudUpload } from 'react-icons/hi'

const HomePage = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageURL, setImageURL] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div
            className="flex flex-row justify-evenly bg-black font-inter">
            <div>
                <form onSubmit={handleSubmit}>
                    <div
                        className="w-96 mb-6 ml-6 mt-6 flex flex-col text-white">
                        <label
                            className="font-bold mb-2">Edit Title: </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter your new title..."
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="p-4 mb-6  rounded border focus:outline-none bg-gray-800 border-white placeholder-gray-700 focus:border-emerald-500" />

                        <label
                            className="font-bold mb-2">Edit Description: </label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter your new description..."
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className="p-3 mb-6 rounded border focus:outline-none bg-gray-800 border-white placeholder-gray-700 focus:border-emerald-500" />

                        <label
                            className="font-bold mb-2">Edit Image: </label>
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="Enter your new image url..."
                            value={imageURL}
                            onChange={e => setImageURL(e.target.value)}
                            className="p-2 mb-6 rounded border focus:outline-none bg-gray-800 border-white placeholder-gray-700 focus:border-emerald-500" />
                    </div>
                    <button
                        type="submit"
                        className=" border border-white rounded text-sm px-7 py-3 border-emerald-400 text-emerald-300 hover:text-white font-bold hover:bg-emerald-500 mb-6 ml-6">
                        Edit Home Page
                    </button>
                </form>
            </div>
            <div
                className="flex items-center justify-center w-96">
                <label
                    className="flex flex-col items-center justify-center w-full h-80 border-4 border-dashed rounded-3xl cursor-pointer border-emerald-400 hover:bg-gray-700 bg-gray-800">
                    <div
                        className="flex flex-col items-center justify-center pt-5 pb-6">
                        <HiOutlineCloudUpload className="text-5xl text-emerald-500 mb-4" />
                        <p
                            className="mb-2 text-sm text-white"><span className="font-semibold text-emerald-400">Click to upload</span> or drag and drop</p>
                        <p
                            className="text-xs text-white"><span className="font-semibold text-emerald-400">SVG</span>, <span className="font-semibold text-emerald-400">PNG</span> or <span className="font-semibold text-emerald-400">JPG</span> (MAX. 800x400px)</p>
                    </div>
                    <input type="file" className="hidden" />
                </label>
            </div>
        </div>
    );
}
export default HomePage;
