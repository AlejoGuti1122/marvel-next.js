import axios from "axios"

export const getCharacters = async () => {
  const response = await axios.get("")
  return response.data.results
}

//url de la api https://gateway.marvel.com:443/v1/public/characters?apikey=

//clave privada bfb80aac40e700370e6a673e9f35c368f9621aed
//clave publica 0b5b04436dbb48744dba11ca936ad318
//ts: 1

//1bfb80aac40e700370e6a673e9f35c368f9621aed0b5b04436dbb48744dba11ca936ad318

//hash: 9ab47e03a55ba0510ab409ad281eb302
