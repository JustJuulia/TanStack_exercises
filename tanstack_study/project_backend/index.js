const express = require('express')
const application = express()
application.get("/", (request, response) => {response.send('<div>asdadsssssssssssssa</div>')})
application.get("/abc", (request, response) => {response.send('<div><h1>jol</h1></div>')})
application.put("/mojput", (request, response) => {response.send('<a>asdadaddddddddddddddd</a>')})
// sci/4c/abc
const sci_router = express.Router(
    
)
var cors = require('cors');
application.use(cors());

sci_router.get("/", (request, response) => {response.send("sci")})

sci_router.get("/json", (request, response) => {
    const data = [{k1:"tekst", k2:2137}]
    response.json(data)})
application.use(express.json())
application.post("/newjson", (request, response) => {
    const data = request;
    console.log(data.body);
    response.send();
});
application.use("/sci/4c/abc", sci_router)



application.listen(8000, () => console.log('servere started'));