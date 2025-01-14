import md5 from 'md5'

/* Public and private keys for authenticating requests to the Marvel API. */
const PUBLIC_KEY = 'b7c12e9c8c7a696c2beba3d88402cdca'
const PRIVATE_KEY = '2af2d886232bee04e511538616968e49efe2cb5b'

/* Function to generate the query parameters needed for Marvel API requests. */
export const getQueryParamsApi = () => {
  /* Get the current timestamp in milliseconds. */
  const timestamp = new Date().getTime()

  /* Generate the MD5 hash combining the timestamp, private key, and public key. */
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY)

  /* Construct the query string for the API request, including the timestamp, public key, and hash. */
  const queryParams = `ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`

  return queryParams
}