const express = require('express')
const application = express()
application.get("/", (request, response) => {response.send('<div>asdadsssssssssssssa</div>')})


var cors = require('cors');
application.use(cors());

application.use(express.json())
application.post("/user/register", (request, response) => {
    const data = request;
    console.log(data.body);
    response.send();
});



application.listen(8000, () => console.log('server started'));