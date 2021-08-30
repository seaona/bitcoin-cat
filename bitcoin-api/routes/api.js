const express = require("express");
const router = express.Router();
const { requestBuilder } = require("../utils/request");

// Basic Methods without Arguments
router.get("/getblockcount", (req,res) => {
  requestBuilder(req, res, "getblockcount", "[]")
});

router.get("/getpeerinfo", (req,res) => {
  requestBuilder(req, res, "getpeerinfo", "[]")
});

router.get("/getbestblockhash", (req,res) => {
  requestBuilder(req, res, "getbestblockhash", "[]")
});

router.get("/getconnectioncount", (req,res) => {
  requestBuilder(req, res, "getconnectioncount", "[]")
});

router.get("/getdifficulty", (req,res) => {
  requestBuilder(req, res, "getdifficulty", "[]")
});

router.get("/getblockchaininfo", (req,res) => {
  requestBuilder(req, res, "getblockchaininfo", "[]")
});

router.get("/getmininginfo", (req,res) => {
  requestBuilder(req, res, "getmininginfo", "[]")
});

router.get("/getpeerinfo", (req,res) => {
  requestBuilder(req, res, "getpeerinfo", "[]")
});

router.get("/getrawmempool", (req,res) => {
  requestBuilder(req, res, "getrawmempool", "[]")
});

// Methods with Arguments

// METHODS WITH ARGUMENTS
/*
getblockhash index 
getblock hash
getrawtransaction id
decoderawtransaction hex
*/

module.exports = router;