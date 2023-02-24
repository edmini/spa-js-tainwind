const express = require('express')
const path = require('path')

const app = express()

const PORT = 8080

app.use("/static", express.static(path.resolve(__dirname, 'src', 'static')))

app.get("/*", (req, res)=>{
	res.sendFile(path.resolve(__dirname, 'src', "index.html"))
})

app.listen(PORT, ()=>{
	console.log(`${PORT} : SERVER IS RUNNING!`)
})
