import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import codeRouter from "./src/routes/code.route.js"
import reviewRouter from "./src/routes/review.route.js"
import questionRouter from "./src/routes/question.route.js"
import authRouter from "./src/routes/auth.route.js"
import cookieParser from "cookie-parser"

const app = express()

// middlewares
app.use(cors())
app.use(bodyParser.json())
// app.use(express.json());
app.use(cookieParser())


// routes
app.use('/api/compile', codeRouter)
app.use('/api/review', reviewRouter)
app.use('/api/questions', questionRouter)
app.use('/api/auth', authRouter)


export {app}