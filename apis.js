const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { google } = require("googleapis")
require('dotenv').config();

module.exports = function handler () {

    const spreadsheetId = "1r48RUU8PlY0UdfspdZNImyOaI_z-_-ZCuxBoyJ2cQok"
    const connect = new google.auth.JWT(
        process.env.CLIENT_EMAIL,
        undefined,
        process.env.PRIVATE_KEY?.replace(/\\n/gm, "\n"),
        ['https://www.googleapis.com/auth/spreadsheets'],
    )
    connect.authorize((err, token) => {
        err ? console.log("CONNECT ERROR : ", err) : console.log("Google api connect!!")
    })
    const googleSheets = google.sheets({ version : "v4", auth : connect })

    router.use(bodyParser.json());

    router.get('/:sheet/:end', async (req, res) => {
        // console.log(req.params.sheet, req.params.end)
        const range = `${req.params.sheet}!A1:${req.params.end}`
        let result = null
        try {
            result = await googleSheets.spreadsheets.values.get({
                spreadsheetId : spreadsheetId,
                range : range,
            })
        } catch (err) {
            console.log("GET DATA ERROR : ", err)
        }
        res.json({"datas" : result})
    })

    router.put("/:sheet/:end", async (req, res) =>{
        let bodyData = []
        Object.keys(req.body.data).forEach((d)=>{
            bodyData.push(req.body.data[d])
        })
        const putRange = `${req.params.sheet}!A${bodyData[0]}:${req.params.end}${bodyData[0]}`
        bodyData[0] = "=row()"
        const batchReq = {
            spreadsheetId : spreadsheetId,
            resource : {
                valueInputOption : "USER_ENTERED",
                data : {
                    range : putRange,
                    majorDimension : "ROWS",
                    values : [bodyData],
                }
            },
            auth : connect
        }
        try {
            const putRes = (await googleSheets.spreadsheets.values.batchUpdate(batchReq)).data
            res.json({"result" : "success"})
        } catch (err) {
            res.json({"error" : err})
        }
    })

    router.post("/:sheet/:end", async (req, res) => {
        const range = `${req.params.sheet}!A1:${req.params.end}`
        // console.log(req.body.data)
        // let bodyData = []
        // Object.keys(req.body.data).forEach((d) => {
        //     bodyData.push(req.body.data[d])
        // })

        const values = [req.body.data]
        const resource = { values, }
        // console.log(resource)
        try {
            const postRes = await googleSheets.spreadsheets.values.append({
                spreadsheetId : spreadsheetId,
                range : range,
                valueInputOption : "USER_ENTERED",
                resource : resource,
            })
            res.json({"result" : "success"})
        } catch (err) {
            res.json({"result" : err})
        }
    })

    router.delete("/", async (req, res) => {
        const num = parseInt(req.body.id)
        const request = {
            spreadsheetId : spreadsheetId,
            resource : {
                requests : [{
                    deleteDimension : {
                        range : {
                            sheetId : 0,//gid
                            dimension : "ROWS",
                            startIndex : num - 1,
                            endIndex : num,
                        }
                    }
                }]
            },
            auth : connect
        }
        try {
            const res = (await googleSheets.spreadsheets.batchUpdate(request)).data
            res.json({"result" : res})
        } catch (err) {
            res.json({"result" : err})
        }
    })

    return router;
}