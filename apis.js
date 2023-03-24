const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
require('dotenv').config();
const {JWT} = require('google-auth-library');
const {google} = require("googleapis")

module.exports = function handler () {
    router.use(bodyParser.json());

    router.get('/', function(req, res) {

        const spreadsheetId = "19xNLOEZd9d9CP2qngOtO5o6WRJsNFbwtd4kn4p29IKI"
        const range = "Users!A1:F5"

        const connect = new google.auth.JWT(
            process.env.CLIENT_EMAIL,
            undefined,
            process.env.PRIVATE_KEY?.replace(/\\n/gm, "\n"),
            ['https://www.googleapis.com/auth/spreadsheets'],
        );
        connect.authorize((err, token) => {
            if(err){
                console.log("CONNECT ERROR : ", err)
            }else{
                console.log("Google api connect!!")
            }
        })

        const googleSheets = google.sheets({ version : "v4", auth : connect })

        // console.log(googleSheets.spreadsheets)

        const getData = async () => {
            try {
                const result = await googleSheets.spreadsheets.values.get({
                    spreadsheetId : spreadsheetId,
                    range : range,
                });
                console.log(result.data.values)
                
            } catch (error) {
                console.log(error)
            }

        }
        getData()

        res.json({"auth" : "hello world"});
    });

//   router.post('/api', (req, res) => {
//     ...
//   });

    return router;
}