// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Users/ivancruz/Projects/anni/anni-landing-page/.cache/dev-404-page.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/ivancruz/Projects/anni/anni-landing-page/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/ivancruz/Projects/anni/anni-landing-page/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/ivancruz/Projects/anni/anni-landing-page/.cache/json/index.json")
}

exports.layouts = {

}