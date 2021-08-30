const request = require("request");

const dotenv = require("dotenv");
dotenv.config();

const USER = process.env.RPC_USER;
const PW = process.env.RPC_PASSWORD;

const headers = {
    "content-type": "text/plain;"
}

exports.requestBuilder = (req, res, rpc_method, params) => {
    const dataString = `{"jsonrpc":"1.0","id":"curltext","method":"${rpc_method}","params":${params}}`;
    const options = {
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
};