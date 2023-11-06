import { convertArrayToObject } from "../utils/helpers"
import { coreGet } from "./axios"

export const fetchHotels = async (
  distance,
  latitude,
  longitude,
  siteId = 31,
  source = null
) => {
  try {
    let hotels = {}
    let apiUrl = `/hotel-proximity?_format=json&site_id=${siteId}`
    apiUrl += `&coordinates[value]=${distance}`
    apiUrl += `&coordinates[source_configuration][origin][lat]=${latitude}`
    apiUrl += `&coordinates[source_configuration][origin][lon]=${longitude}`
    const hotelsArray = await coreGet(apiUrl, source)
    if(hotelsArray.error) {
        return { hotels: [], hotelsArray: [] }
    }
    if (hotelsArray !== null) {
      hotels = convertArrayToObject(hotelsArray, "crs_code")
    }
    return { hotels, hotelsArray }
  } catch (e) {
    console.error(e)
    return { hotels: [], hotelsArray: [] }
  }
}
