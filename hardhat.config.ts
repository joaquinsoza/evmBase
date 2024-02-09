import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "localhost",
  networks: {
    localhost: {},
    ethFork: {
      forking: {
        url: process.env.MAINNET_RPC as string,
        // blockNumber: 15058412,
      },
    },
    bscFork: {
      forking: {
        url: process.env.BSC_MAINNET_RPC as string,
        // blockNumber: 15058412,
      },
    },
    polygon_mumbai: {
      url: process.env.POLYGON_MUMBAI_RPC,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    avalanche_fuji: {
      url: process.env.AVALANCHE_FUJI_RPC,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    bsc_testnet: {
      url: process.env.BSC_TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
