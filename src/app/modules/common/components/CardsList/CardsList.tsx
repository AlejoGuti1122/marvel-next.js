/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react"
import Card from "../Card/Card"
import axios from "axios"
import { getQueryParamsApi } from "@/services/query-params"

const BASE_URL = "https://gateway.marvel.com/v1/public"

const CardsList = () => {
  useEffect(() => {
    getCharacters(0, 20)
  }, [])

  const [characters, setCharacters] = React.useState([])

  const [loading, setLoading] = React.useState(false)

  const getCharacters = async (
    offset: number,
    limit: number,
    nameStartsWith?: string | null,
    series?: string,
    comics?: string
  ) => {
    let url = `${BASE_URL}/characters?${getQueryParamsApi()}&limit=${limit}&offset=${offset}`
    setLoading(true)

    if (nameStartsWith) {
      url = `${url}&nameStartsWith=${nameStartsWith}`
    }

    if (series) {
      url = `${url}&series=${series}`
    }

    if (comics) {
      url = `${url}&comics=${comics}`
    }

    try {
      const response = await axios.get(url)
      setCharacters(response.data.data.results)
      setLoading(false)
      return response.data.data
    } catch (error) {
      console.error("Error fetching characters:", error)
      throw error
    }
  }

  const renderCards = characters.map((card: any) => {
    return (
      <Card
        key={card.id}
        image={card.thumbnail.path + "." + card.thumbnail.extension}
        tittle={card.name}
        description={card.description}
      />
    )
  })

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      )}
      <div className="bg-stone-900 md:grid md:grid-cols-2 flex flex-col lg:grid-cols-4 ">
        {renderCards}
      </div>
    </div>
  )
}

export default CardsList
