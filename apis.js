const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { google } = require("googleapis")
require('dotenv').config();

module.exports = function handler () {

    const spreadsheetId = "19xNLOEZd9d9CP2qngOtO5o6WRJsNFbwtd4kn4p29IKI"
    const range = "Calendar!A1:G"
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

    router.get('/', async (req, res) => {
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

    router.put("/", async (req, res) =>{
        let bodyData = []
        Object.keys(req.body.data).forEach((d)=>{
            bodyData.push(req.body.data[d])
        })
        const putRange = `Calendar!A${bodyData[0]}:G${bodyData[0]}`
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

    router.post("/", async (req, res) => {
        let bodyData = []
        Object.keys(req.body.data).forEach((d) => {
            bodyData.push(req.body.data[d])
        })
        const postValue = [bodyData]
        const resource = { postValue }
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
                            sheetId : 1047488640,//gid
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