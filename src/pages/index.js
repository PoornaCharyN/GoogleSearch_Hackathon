import React, { useEffect, useState } from "react"
import Autosuggest from "react-autosuggest"
import Axios from "axios"
import Layout from "../components/layout"
import "../components/index.module.css"
import HotelCard from "../components/HotelCard"
import { fetchHotels } from "../services/core"
import { HotelAgencyHeader } from "../components/Hotel/HotelAgencyHeader"
import HotelSearchPage from "../components/HotelSearch/HotelSearch"
import "../index.css"

const getHighlightedText = (text, highlight) => {
  // Split on highlight term and include term into parts, ignore case
  const parts = text?.split(new RegExp(`(${highlight})`, "gi"))
  return (
    <span className="cursor-pointer">
      {" "}
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase()
              ? { fontWeight: "bold" }
              : {}
          }
        >
          {part}
        </span>
      ))}{" "}
    </span>
  )
}

const IndexPage = () => {
  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [selectedItem, setSelectedItem] = useState(null)
  const [hotels, setHotels] = useState([])
  const abortController = new AbortController()
  useEffect(() => {
    const fetchData = async val => {
      try {
        const data = await fetch(`/api/googleApi?inputValue=${val}`, {
          signal: abortController.signal,
        })
        const suggest = await data.json()
        setSuggestions(suggest)
      } catch (e) {
        console.log(e)
      }
    }
    if (inputValue && inputValue.length > 3) {
      fetchData(inputValue)
    }
    return () => {
      abortController.abort()
    }
  }, [inputValue])
  const getSuggestions = value => {
    if (value) {
      const inputValue = value.trim().toLowerCase()
      setInputValue(inputValue)
    }
    return []
  }

  const getSuggestionValue = suggestion => suggestion.name
  const handleClearSearch = () => {
    setSuggestions([])
  }
  const renderSuggestion = suggestion => {
    return (
      <span className="list-group-item" id={suggestion.place_id}>
        {getHighlightedText(suggestion.description, inputValue)}
      </span>
    )
  }
  const onChange = (event, { newValue }) => {
    setValue(newValue)
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const inputProps = {
    placeholder: "City, airport, attraction or hotel",
    value,
    className: `rounded form-control list-group input-search`,
    onChange,
  }
  const onSuggestionSelected = (event, data) => {
    setValue(data.suggestion.description)
    setSelectedItem(data.suggestion)
  }
  const getSectionSuggestions = section => {
    if (section !== undefined) {
      return section.data
    }
    return null
  }
  const shouldRenderSuggestions = () => {
    return true
  }
  const handleFindHotels = async () => {
    setIsLoading(true)
    try {
      if (selectedItem.place_id) {
        const data = await fetch(
          `/api/googleDetailsAPI?placeId=${selectedItem.place_id}`
        )
        const { result } = await data.json()
        const { location } = result.geometry
        const { hotels, hotelsArray } = await fetchHotels(
          process.env.GATSBY_HOTEL_DISTANCE,
          location.lat,
          location.lng,
          process.env.GATSBY_SITE_ID,
          null
        )
        setHotels(hotelsArray)
        setIsLoading(false)
      }
    } catch (e) {
      setIsLoading(false)
    }
  }
  return (
    <Layout>
      <div className="">
        <div className="Hotel-wrapper">
        <HotelAgencyHeader/>
        </div>
        <div className="Hotel-search-wrapper">
        <HotelSearchPage/>
        </div>
       

        
        {/* <div className="row mb-4">
          <div className="col-md-10">
            <div className="form-group">
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                onSuggestionSelected={onSuggestionSelected}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                highlightFirstSuggestion={!isLoading}
                focusInputOnSuggestionClick={false}
                getSectionSuggestions={getSectionSuggestions}
                alwaysRenderSuggestions={true}
                shouldRenderSuggestions={shouldRenderSuggestions}
                inputProps={inputProps}
              />
            </div>
          </div>
          <div className="col-md-2" style={{ textAlign: "end" }}>
            <button
              className="btn btn-primary mb-2"
              onClick={handleFindHotels}
              disabled={isLoading}
            >
              Find Hotel
            </button>
          </div>
        </div>
        <div className="row">
          {hotels.map(hotel => (
            <HotelCard hotel={hotel} key={hotel.id} />
          ))}
        </div> */}
      </div>
    </Layout>
  )
}

export default IndexPage
