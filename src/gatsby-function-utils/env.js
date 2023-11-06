let output = require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})


const NETLIFY_PRODUCTION_BUILD = process.env.CONTEXT === "production"
module.exports.NETLIFY_PRODUCTION_BUILD = NETLIFY_PRODUCTION_BUILD

module.exports.output = output

// Why do we use mapEnvVars?
// We must manually map each env var explicitly so that they can be got from Gatsby Cloud.
// Gatsby Cloud forbids you from doing things like: process.env[name] -
// rather, you must explicity dot reference the env vars as: process.env.envName!!!
const mapEnvVars = {
  GATSBY_GOOGLE_APIS_URL: process.env.GATSBY_GOOGLE_APIS_URL,
  GATSBY_GOOGLE_APIS_KEY: process.env.GATSBY_GOOGLE_APIS_KEY,
  GATSBY_GOOGLE_SEARCH_API_TYPES: process.env.GATSBY_GOOGLE_SEARCH_API_TYPES,
}

module.exports.default = name => {
  const val = mapEnvVars[name] || output.parsed[name]
  return val
}
