const fs = require("fs")
const { Location, ReturnType, CodeLanguage } = require("@chainlink/functions-toolkit")

// simulate the `./paraswap-buy-req.js` call from the smart contract with these args
const reth = "0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8"
const weth = "0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe"
const decimals = "18"
const amount = "100000000000000000000"

// Configure the request by setting the fields below
const requestConfig = {
  source: fs.readFileSync("./paraswap-buy-req.js").toString(),
  codeLocation: Location.Inline,
  args: [reth, decimals, weth, decimals, amount],
  codeLanguage: CodeLanguage.JavaScript,
  expectedReturnType: ReturnType.uint256,
}

module.exports = requestConfig

// // Configure the request by setting the fields below
// const requestConfig = {
//   // String containing the source code to be executed
//   source: fs.readFileSync("./calculation-example.js").toString(),
//   //source: fs.readFileSync("./API-request-example.js").toString(),
//   // Location of source code (only Inline is currently supported)
//   codeLocation: Location.Inline,
//   // Optional. Secrets can be accessed within the source code with `secrets.varName` (ie: secrets.apiKey). The secrets object can only contain string values.
//   secrets: { apiKey: process.env.COINMARKETCAP_API_KEY ?? "" },
//   // Optional if secrets are expected in the sourceLocation of secrets (only Remote or DONHosted is supported)
//   secretsLocation: Location.DONHosted,
//   // Args (string only array) can be accessed within the source code with `args[index]` (ie: args[0]).
//   args: ["1", "bitcoin", "btc-bitcoin", "btc", "1000000", "450"],
//   // Code language (only JavaScript is currently supported)
//   codeLanguage: CodeLanguage.JavaScript,
//   // Expected type of the returned value
//   expectedReturnType: ReturnType.uint256,
// }

// module.exports = requestConfig
