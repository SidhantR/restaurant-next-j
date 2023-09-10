'use client'

import Image from "next/image"
import errorSrc from "../../../public/icons/error.png"
export default function ErrorPage({error}: {error: Error}) {
    return (
        <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
            <Image src={errorSrc} alt="" />
            <div className="bg-white px-9 py-14 shadow rounded">
            <h3 className="text-3x1 font-bold"> Well this is not Good</h3>
            <p className="text-reg font-bold">{error.message}</p>
            <p className="mt-6 text-sm font-light">404</p>
            </div>
        </div>
    )
}