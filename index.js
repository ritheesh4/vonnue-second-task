const fs = require("fs");
const users = require("./users.json");
const division = require("./division.json")

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

    users[index].marks.push(marksDetails);
    fs.writeFile("users.json", JSON.stringify(users), err => {
        if (err) throw err;
        console.log("Done writing");
    });
}

const editMarks = (id, subject, marks) => {
    let index = users.findIndex(obj => obj.id == id);
    console.log("index", index)
    let allObjects = users[index];
    console.log("all objects", allObjects)
    let correspondingObject = allObjects.marks;
    console.log("corresopondign objects", correspondingObject);


    for (let i = 0; i < correspondingObject.length; i++) {
        // console.log(allObjects[i].subject)
        if (correspondingObject[i].subject === subject) {
            correspondingObject[i].mark = marks;

        }

    }


    fs.writeFile("users.json", JSON.stringify(users), err => {
        if (err) throw err;
        console.log("Done writing");
    });
}



const addDivision = (name, teacherName, students) => {
    let divisionInput = {
        name: name,
        teacherName: teacherName,
        students: students
    };
    division.push(divisionInput);

    fs.writeFile("division.json", JSON.stringify(division), err => {
        if (err) throw err;
        console.log("Done writing");
        console.log(division)
    });
}

addDivision("Class A", "Renjisha e rajan", ["ritheesh", "renjith", "anandhu", "rupesh"]);
