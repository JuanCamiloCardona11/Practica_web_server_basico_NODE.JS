const express = require('express');
const path = require('path');

const app = express();

//console.log(`dirname:  ${__dirname}`);
//console.log(`filename: ${__filename}`);
//console.log(path.join(__dirname,'../public'));

const publicDirectoryPath = path.join(__dirname,'../public');

app.use(express.static(publicDirectoryPath));

app.listen(3000,() =>{
   console.log("Server up at port 3000");
})