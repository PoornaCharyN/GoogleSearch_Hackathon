import React from "react"
import Img from "gatsby-image"
import { buildFluidImageData } from "@imgix/gatsby"
import "./hotelcard.css"

const baseUrl =
  process.env.GATSBY_CORE_CONTENT_BASE_URL ||
  "https://rlhcorestg.prod.acquia-sites.com"

const HotelCard = ({ hotel }) => {
  const imageUrl =
    hotel.gallery && hotel.gallery.length
      ? decodeURI(
          hotel.gallery.indexOf("http") > -1
            ? hotel.gallery
            : baseUrl + hotel.gallery
        )
      : null
  let fluidImageData

  try {
    if (imageUrl) {
      fluidImageData = buildFluidImageData(
        imageUrl,
        {
          ar: 1.18,
          auto: ["format", "compress"],
        },
        {
          sizes: "100%",
        }
      )
    }
  } catch (error) {
    console.error("Error building fluid image data: ", error)
  }
  return (
    <div className="col-md-12">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            {imageUrl && <Img fluid={fluidImageData} alt={hotel.name} />}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="brandLogo">
                <img src={hotel.brand_logo} alt={hotel.brand} />
              </div>
              <h5 className="card-title fw-bold">{hotel.name}</h5>
              <a
                style={{ fontSize: "14px", color: "black", cursor: "pointer" }}
                className="card-text"
                dangerouslySetInnerHTML={{ __html: hotel.address }}
              ></a>
              <div className="distance d-block">
                <span>{hotel.miles}</span>
                <span className="px-1">from downtown</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
