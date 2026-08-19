let http = require("http")
// console.log(http)

let server = http.createServer((req, res)=>{
   console.log("Server Is Created")
   res.end("Response Bhej Diya Hai ....")
})

server.listen(5000 , ()=>{
   console.log("Server Is Running On Port 5000...")
})