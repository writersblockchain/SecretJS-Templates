const { SecretNetworkClient } = require("secretjs");

require("dotenv").config();

(async () => {
  // Create a readonly connection to Secret Network node
  // Docs: https://github.com/scrtlabs/secret.js#secretnetworkclient
  const secretjs = await SecretNetworkClient.create({
    grpcWebUrl: process.env.SECRET_GRPC_WEB_URL,
  });

  // Query chain id & height
  const latestBlock = await secretjs.query.tendermint.getLatestBlock({});
  console.log("ChainId:", latestBlock.block.header.chainId);
  console.log("Block height:", latestBlock.block.header.height);

  console.log("Successfully connected to Secret Network");
})();
