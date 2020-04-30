const fs = require("fs");
const users = require("./users.json");

const addStudent = (name, id) => {
    let user = {
        name: name,
        id: id,
        marks: []
    };
    users.push(user);

    fs.writeFile("users.json", JSON.stringify(users), err => {
        if (err) throw err;
        console.log("Done writing"); 
        console.log(users)
    });
}

const marks = (id, subject, mark) => {
    let index = users.findIndex(obj => obj.id == id);
    let marksDetails = {
        subject: subject,
        mark: mark,

    };
  
    users[index].marks = marksDetails;
    fs.writeFile("users.json", JSON.stringify(users), err => {
        if (err) throw err;
        console.log("Done writing");    
    });


}

marks(6, 'malayalam', 60)
