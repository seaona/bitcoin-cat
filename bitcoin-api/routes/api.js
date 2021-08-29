const express = require("express");
const router = express.Router();
const request = require("request");

const dotenv = require("dotenv");
dotenv.config();

const USER = process.env.RPC_USER;
const PW = process.env.RPC_PASSWORD;

const headers = {
    "content-type": "text/plain;"
}

router.get("/getblockcount", (req,res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
  var options = {
    url: `http://${USER}:${PW}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getpeerinfo", (req,res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getpeerinfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PW}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getbestblockhash", (req,res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`;
  var options = {
    url: `http://${USER}:${PW}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});
// BASIC METHODS
//getbestblockhash, getconnectioncount, getdifficulty, getblockchaininfo, getmininginfo, getpeerinfo, getrawmempool

// METHODS WITH ARGUMENTS
/*
getblockhash index 
getblock hash
getrawtransaction id
decoderawtransaction hex
*/

module.exports = router;