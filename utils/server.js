const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

//enables cross-origin resource sharing for all origins
app.use(cors())

//parse incoming requets bodiees with JSON payloads
app.use(express.json())

//log request ingo
app.use(morgan("tiny"))

const PORT = process.env.PORT || 30001

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}')
})