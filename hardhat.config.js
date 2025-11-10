// hardhat.config.js
import "hardhat/config";
import "@nomicfoundation/hardhat-ethers"; // 只导入必要的插件

export default {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};