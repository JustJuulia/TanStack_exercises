const express = require('express')
const application = express()
application.get("/", (request, response) => {response.send('<div>asdadsssssssssssssa</div>')})
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var cors = require('cors');
application.use(cors());
application.use(express.json())
const path = require('path');
const fs = require('fs');
let users = [];
application.post("/user/register", (request, response) => {
    const mail = request.query.mail;
    const password = request.query.password;
    const gender = request.query.gender;
    const school = request.query.school;
    var hash = bcrypt.hashSync(password, salt);
    console.log('mail: ', mail, 'password: ', password,'hashed password: ', hash, 'gender: ', gender, 'school: ', school);
    data = {
        "mail" : mail,
        "password" : hash,
        "gender" : gender,
        "school" : school
    }
    users.push(data);
    console.log('sigmastyczna lista userow:   ',users);
    response.send();
});
application.get("/users", (request, response) => {
    response.send(users);
});
application.get('/picture/:id', (request, response) => {
    const id = request.params.id;
    const path_pic = path.join(__dirname, "assets", `${id}.jpg`); 
    if (fs.existsSync(path_pic)) {
        response.sendFile(path_pic);
      } else {
        response.status(404).send("Image not found");
      }
})

application.listen(8000, () => console.log('server started'));