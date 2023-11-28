const express = require("express")
const cors = require("cors")
const app = express()


app.use(cors())
app.use(express.json())


const fetchDataRoute = require('./routes/fetchData')
const addWordRoute = require('./routes/createWordTable')
const updateWord = require('./routes/updateWord')
const getWord = require('./routes/getWord')

app.use(fetchDataRoute);
app.use(addWordRoute);
app.use(updateWord);
app.use(getWord);

app.listen(4000, () => {
    console.log("app is running..")
})

