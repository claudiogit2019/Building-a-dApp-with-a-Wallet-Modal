require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();  // Importa dotenv para leer las variables del archivo .env

const { INFURA_URL, SEPOLIA_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: INFURA_URL,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
