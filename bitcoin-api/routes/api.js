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
router.get("/getblockhash/:index", (req,res) => {
  requestBuilder(req, res, "getblockhash", `[${req.params.index}]`)
});

router.get("/getblock/:hash", (req,res) => {
  requestBuilder(req, res, "getblock", `[${req.params.hash}]`)
});


router.get("/getrawtransaction/:hex", (req,res) => {
  requestBuilder(req, res, "getrawtransaction", `[${req.params.hex}]`)
});

router.get("/decoderawtransaction", (req,res) => {
  requestBuilder(req, res, "decoderawtransaction", req.hex)
});

// Wallets
router.post("/createwallet", (req,res) => {
  requestBuilder(req, res, "createwallet", req.body.wallet)
});

module.exports = router;