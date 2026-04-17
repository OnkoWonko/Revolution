const express = require('express');
const app = express();

app.get('/', (req, res, next) =>{
    res.send("Hola mundo")
});
app.listen(process.env.PORT || 3000, () =>{
    console.log("Server is running...");
})