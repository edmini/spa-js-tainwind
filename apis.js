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
        const range = `${req.params.sheet}!A1:${req.params.end}`
        try {
            const result = await googleSheets.spreadsheets.values.get({
                spreadsheetId : spreadsheetId,
                range : range,
            })
            res.json({"datas" : result})
        } catch (err) {
            res.json({"error" : err})
        }
    })

    router.put("/:sheet/:end", async (req, res) =>{
        // let bodyData = []
        // Object.keys(req.body.data).forEach((d)=>{
        //     bodyData.push(req.body.data[d])
        // })
        const putRange = `${req.params.sheet}!A${req.body.data[0]}:${req.params.end}`
        req.body.data[0] = "=row()"
        console.log(req.body.data)
        const batchReq = {
            spreadsheetId : spreadsheetId,
            resource : {
                valueInputOption : "USER_ENTERED",
                data : {
                    range : putRange,
                    majorDimension : "ROWS",
                    values : [req.body.data],
                }
            },
            auth : connect
        }
        try {
            const putRes = (await googleSheets.spreadsheets.values.batchUpdate(batchReq)).data
            res.json({"result" : putRes.responses[0].updatedRange})
        } catch (err) {
            res.json({"error" : err})
        }
    })

    router.post("/:sheet/:end", async (req, res) => {
        const range = `${req.params.sheet}!A1:${req.params.end}`
        req.body.data[0] = "=row()"
        const values = [req.body.data]
        const resource = { values, }
        try {
            const postRes = await googleSheets.spreadsheets.values.append({
                spreadsheetId : spreadsheetId,
                range : range,
                valueInputOption : "USER_ENTERED",
                resource : resource,
            })
            res.json({"result" : postRes.data.updates.updatedRange})
        } catch (err) {
            res.json({"error" : err})
        }
    })

    router.delete("/:sheet/:gid/:id", async (req, res) => {
        const num = parseInt(req.params.id)
        const gid = parseInt(req.params.gid)//gid Calendar : 0, Todos : 1275617879,
        const request = {
            spreadsheetId : spreadsheetId,
            resource : {
                requests : [{
                    deleteDimension : {
                        range : {
                            sheetId : gid,
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
            const result = (await googleSheets.spreadsheets.batchUpdate(request)).data
            res.json({"result" : result})
        } catch (err) {
            console.log(err)
            res.json({"error" : err})
        }
    })

    return router;
}