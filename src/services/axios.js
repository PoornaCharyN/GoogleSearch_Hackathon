import Axios from "axios"

const apiUrl = `${process.env.GATSBY_CORE_BASE_URL}/api`

const core = Axios.create({
  baseURL: apiUrl,
  headers: {
    "api-key": process.env.GATSBY_CORE_API_KEY,
  },
})

export const coreGet = async (url, source = null) => {
  let data = null
  const config = {}
  if (source !== null) {
    config.cancelToken = source.token
  }
  try {
    const response = await core.get(url, config)
    if (response.status === 200) {
      data = response.data
    }
  } catch (error) {
    data = {
      error: true,
      message: error.message,
    }
  }
  return data
}

export const getAutoComplete = async (inputValue, source) => {
  let responseData = null
  try {
    const config = {
      CancelToken: source.token,
      headers: {},
    }
    const url = `${process.env.GATSBY_GOOGLE_APIS_URL}place/autocomplete/json?key=${process.env.GATSBY_GOOGLE_APIS_KEY}&input=${inputValue}&types=geocode|establishment&sessiontoken=`
    const res = await Axios.get(url, config)
    const data = res.predictions
    const promiseArray = data.map(element => {
      const detailsApiUrl = `${process.env.GATSBY_GOOGLE_APIS_URL}place/details/json?place_id=${element.place_id}&key=${process.env.GATSBY_GOOGLE_APIS_KEY}`
      return Axios.get(detailsApiUrl)
    })
    Promise.all(promiseArray).then(val => {
      const details = val?.result
      data.forEach(element => {
        if (element.place_id === details?.place_id) {
          element.location = { ...details.geometry }
          element.detailsAPIRes = { ...details }
        }
      })
    })
  } catch (error) {
    responseData = error
  }
  return responseData
}
