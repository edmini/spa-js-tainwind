const express = require('express')
const path = require('path')
const app = express()
const apis = require("./apis")

const PORT = 8080

app.use("/static", express.static(path.resolve(__dirname, 'src', 'static')))

app.use("/apis", apis())

app.get("/*", (req, res)=>{
	res.sendFile(path.resolve(__dirname, 'src', "index.html"))
})

app.listen(PORT, ()=>{
	console.log(`${PORT} : SERVER IS RUNNING!`)
})
