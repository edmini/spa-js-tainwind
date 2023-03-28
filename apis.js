const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
require('dotenv').config();
const {google} = require("googleapis")

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

    router.get('/', function(req, res) {
        let result = null
        const getData = async () => {
            try {
                result = await googleSheets.spreadsheets.values.get({
                    spreadsheetId : spreadsheetId,
                    range : range,
                });
                // console.log(result.data.values)
            } catch (error) {
                console.log("GET DATA ERROR : ", error)
            }
            res.json({"datas" : result});
        }
        getData()
    });

    router.put("/", async function(req, res){
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

//   router.post('/api', (req, res) => {
//     ...
//   });

    return router;
}