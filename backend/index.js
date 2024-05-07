const express = require("express")

const cors = require("cors")
const mainRouter = require('../backend/Routes/index');


app.use(cors())  ; 

const app = express() ; 
app.use("api/v1",mainRouter) ; 

//  By calling app.use("api/v1", mainRouter), the mainRouter middleware function is mounted at the /api/v1 path, and any requests that match this path will be handled by mainRouter.