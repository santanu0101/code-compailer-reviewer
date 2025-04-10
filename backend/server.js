import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import codeRouter from "./src/routes/code.route.js"
import reviewRouter from "./src/routes/review.route.js"


dotenv.config()
const app = express()

const port = process.env.PORT || 3000

// middlewares
app.use(cors())
app.use(bodyParser.json())

// routes
app.use('/api/compile', codeRouter)
app.use('/api/review', reviewRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))