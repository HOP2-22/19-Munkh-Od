// const fs = require('fs');

// const content = "Some content";

// fs.writeFileSync('/Users/joe/test.txt,' content, err => {
//     if ( err) {
//         console.error(err);
//     }
// });

// const a = 6969;
// const b = 69;
// const sum = a + b;
// console.log(sum);

const express = require('express')
const { getUsers } = require(".//controller/users");

const port = 8888;
const app = express();

app.get("/users", getUsers);

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});