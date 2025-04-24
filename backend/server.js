import {app} from "./app.js"
import dotenv from "dotenv"
import mongoDBConnect from "./src/config/db.js"

dotenv.config()
const port = process.env.PORT || 3000

mongoDBConnect().then(()=>{
    app.on("error", (error)=>{
        console.log("error", error)
        throw error
    })
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}).catch((error)=>{
    console.log(`connection fail error ${error}`)
})