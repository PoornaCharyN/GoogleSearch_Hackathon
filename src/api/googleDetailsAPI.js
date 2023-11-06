const env = require("../gatsby-function-utils/env").default
const axios = require("axios")

const googleDetailsAPI = async (req, res) => {
  const { placeId } = req.query
  try {
    const detailsApiUrl = `${env(
      "GATSBY_GOOGLE_APIS_URL"
    )}place/details/json?place_id=${placeId}&key=${env(
      "GATSBY_GOOGLE_APIS_KEY"
    )}`
    const result = await axios.get(detailsApiUrl)
    const jsonData = result.data;
    return res.status(200).json(jsonData)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error.toString(),
      message: error,
    })
  }
}
export default googleDetailsAPI
