const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('welcome!')
})

app.listen(3000, () => {
    console.log("Start server at Port [3000]")
})

app.get('*',(req,res) => {
    res.sendFile(__dirname + '/public/product.html')
})



// continue framework2