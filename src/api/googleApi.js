const env = require("../gatsby-function-utils/env").default
const axios = require("axios")

const PLACE_IDS = [
  "ChIJtQQAdb1w44kRACwMzbs8g8g",
  "ChIJEWOfbNS2woARfvJshRTRp6o",
  "ChIJS-B6GTHGxokRtXWy8SVZiM4",
  "ChIJKYApCUc-WBQROTn4JL8ozhI",
  "ChIJDY-k_tN4bIcR3ge2r3tcsmc",
  "ChIJn2IUCKC0woARmZBXFBOsAz0",
]

const googleAPI = async (req, res) => {
  const { inputValue } = req.query
  try {
    const url = `${env(
      "GATSBY_GOOGLE_APIS_URL"
    )}place/autocomplete/json?key=${env(
      "GATSBY_GOOGLE_APIS_KEY"
    )}&input=${inputValue}&types=${env(
      "GATSBY_GOOGLE_SEARCH_API_TYPES"
    )}&sessiontoken=`
    const apiRes = await axios.get(url)
    let data = apiRes?.data?.predictions?.filter(item => {
      if (!item.types.includes("lodging")) {
        return item
      } else if (
        item.types.includes("lodging") &&
        PLACE_IDS.includes(item.place_id)
      ) {
        return item
      } else return false
    })
    return res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error.toString(),
      message: error,
    })
  }
}
export default googleAPI
