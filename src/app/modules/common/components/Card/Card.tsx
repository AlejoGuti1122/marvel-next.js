import Image from "next/image"
import React, { useState } from "react"
import { useRouter } from "next/router"

interface CardProps {
  id?: number
  image: string
  tittle: string
  description: string
}

const Card = ({ image, tittle, description }: CardProps) => {
  const [showDescription, setShowDescription] = useState(false)
  const router = useRouter()

  const handleSelectChange = () => {
    setShowDescription(!showDescription)
  }

  const handleButtonClick = () => {
    router.push("/secondView")
  }

  return (
    <div className="flex justify-center items-center">
      <div className=" gap-4 mt-11 mb-8 flex flex-col justify-center items-center w-[290px] h-auto bg-stone-800 rounded-lg shadow-lg p-4 mx-3">
        <Image
          className="rounded-lg h-[235px] w-full -mt-1"
          src={image}
          alt={image}
          width={500}
          height={200}
        />

        <p className="text-white mt-4 font-bold">{tittle}</p>
        <div>
          <button
            className="text-amber-500 font-bold"
            onClick={handleButtonClick}
          >
            VER MÁS
          </button>
        </div>
        <div
          onClick={handleSelectChange}
          className="mt-4 p-2 rounded cursor-pointer flex"
        >
          <span className="-mt-2">{showDescription ? "▲" : "▼"}</span>
          <span>{showDescription ? "" : ""}</span>
        </div>

        {showDescription && (
          <p className="text-white mt-4 font-bold">{description}</p>
        )}
      </div>
    </div>
  )
}

export default Card
