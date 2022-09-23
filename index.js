const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const PORT = 8000

app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

app.post(`/adebisi`,(req,res) => {
    const data = req.body
    console.log(data)
    if (data.firstname == "" || data.lastname == "" || data.email == ""){
        res.status(400).send({
            message:"all fields are required"
        })
    }
    else{
        res.status(201).send({
            message:"customer successfully created"
        })
    }
}
)