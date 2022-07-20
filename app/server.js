const express = require('express')
const app = express();


app.use('/onerror', express.static(__dirname + '/onerror'));
app.use('/onload', express.static(__dirname + '/onload'));
app.use('/onmonetization', express.static(__dirname + '/onmonetization'));
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname,  { index: '/app/' }));
app.listen(5001., () => {
    console.log("Server is running on port 5001")
})