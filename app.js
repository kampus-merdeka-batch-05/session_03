const http = require("http")
const PORT = 1234

http.createServer((req, res) => {

const url = req.url
const method = req.method
  
if (url === "/" && method === "GET") {
    const content = "<h1> Hello World </h1>"
  
    res.writeHead(200, {
      "Content-Type": "text/html"
    })
  
    res.write(content)
  
    res.end()
}

if (url === "/" && method === "POST") {

  let rawData = ""

  req.on("data", (data) => {
    rawData += data
  })

  req.on("end", () => {
    res.writeHead(200, {
      "Content-Type": "application/json"
    })
  
    res.write(rawData)
  
    res.end()
  })

}

if (url === "/about") {
  const content = "<h1> Halaman About </h1>"
  
  res.writeHead(200, {
    "Content-Type": "text/html"
  })

  res.write(content)

  res.end()
}


}).listen(PORT)

// root => localhost:3000
// route => localhost:3000/about

console.log("Server is running on port: ", PORT);

/**
 * Install local project
 * "npm install nodemon"
 * 
 * Install project di dev dependencies
 * "npm install --save-dev nodemon"
 * 
 * Install global
 * "npm install -g nodemon"
 * 
 * GET, POST, PUT, PATCH, DELETE
 */