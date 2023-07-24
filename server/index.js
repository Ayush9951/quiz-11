const express = require("express")
const app = express()
const mongoose = require("mongoose")
const addQuestionRoute = require("./routes/question")

mongoose.connect("mongodb://0.0.0.0:27017/quiz-11")
    .then(() => {
        console.log("connected to db")
    })
    .catch((error) => {
        console.log(error)
    })

app.use(express.json())
app.use("/admin/questions", addQuestionRoute)


app.listen(4000, () => {
    console.log("server running on port 4000")
})