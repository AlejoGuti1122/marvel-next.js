import React, { useState, useEffect } from "react"

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [isSelect1Focused, setIsSelect1Focused] = useState(false)
  const [isSelect2Focused, setIsSelect2Focused] = useState(false)
  const [showHelperText, setShowHelperText] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isFocused) {
      timer = setTimeout(() => {
        setShowHelperText(true)
      }, 120)
    } else {
      setShowHelperText(false)
    }
    return () => clearTimeout(timer)
  }, [isFocused])

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-stone-900">
      <div className="flex flex-col w-full h-auto mt-6 justify-between items-center px-6 space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        {/* Input de Buscar Personaje */}
        <div className="relative flex flex-col w-full max-w-4xl m-4">
          <div
            className={`flex items-center rounded-lg px-4 py-2 ${
              isFocused ? "bg-stone-700" : "bg-stone-800"
            }`}
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Buscar personaje"
              className={`bg-transparent text-white ml-2 focus:outline-none w-full h-14 border-b-2 ${
                isFocused ? "border-white" : "border-gray-400"
              }`}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
          {isFocused && showHelperText && (
            <p className="absolute left-0 top-full text-gray-400 mt-2 ml-6">
              Ingresa el nombre del personaje
            </p>
          )}
        </div>

        {/* Primer Select */}
        <div className="relative w-full max-w-4xl m-4">
          <svg
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          <select
            className={`appearance-none w-full h-[70px] text-white focus:outline-none rounded-lg pl-10 pr-4 border-b-2 ${
              isSelect1Focused
                ? "bg-stone-700 border-white"
                : "bg-stone-800 border-gray-400"
            }`}
            onFocus={() => setIsSelect1Focused(true)}
            onBlur={() => setIsSelect1Focused(false)}
          >
            <option value="">Comics</option>
            <option value="comic1">Comic 1</option>
            <option value="comic2">Comic 2</option>
          </select>
        </div>

        {/* Segundo Select */}
        <div className="relative w-full max-w-4xl m-4">
          <svg
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          <select
            className={`appearance-none w-full h-[70px] text-white focus:outline-none rounded-lg pl-10 pr-4 border-b-2 ${
              isSelect2Focused
                ? "bg-stone-700 border-white"
                : "bg-stone-800 border-gray-400"
            }`}
            onFocus={() => setIsSelect2Focused(true)}
            onBlur={() => setIsSelect2Focused(false)}
          >
            <option value="">Series</option>
            <option value="series1">Series 1</option>
            <option value="series2">Series 2</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Navbar