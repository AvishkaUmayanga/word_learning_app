const express = require("express")
const cors = require("cors")
const app = express()


app.use(cors())
app.use(express.json())


const fetchDataRoute = require('./routes/fetchData')
const addWordRoute = require('./routes/createWordTable')

app.use(fetchDataRoute);
app.use(addWordRoute);


app.listen(4000, () => {
    console.log("app is running..")
})

