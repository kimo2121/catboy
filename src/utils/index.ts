import { Contract } from "@ethersproject/contracts";
import CartelPunksABI from "contracts/CartelPunks.json";

export const Networks = {
  ETHMainNet: 1,
  MainNet: 56,
  Testnet: 97,
  Rinkeby: 4,
  Kovan: 42,
};

export const CONTRACTS_BY_NETWORK = {
  [Networks.ETHMainNet]: {
    CartelPunks: {
      address: "0x62c15D5814c5dbDE50CD421120D15E6B6F50D270",
      abi: CartelPunksABI,
    },
  },
  [Networks.MainNet]: {
    CartelPunks: {
      address: "0x4c1900270dBf0c1e6a9c984aEF9a18a7CB9Ab1cC",
      abi: CartelPunksABI,
    },
  },
  [Networks.Testnet]: {
    CartelPunks: {
      address: "0x92468D243209f4fbD9dF42256325EB4AaB1E345e",
      abi: CartelPunksABI,
    },
  },
  [Networks.Rinkeby]: {
    CartelPunks: {
      address: "0x88F41a7e5b88c750083f5a536fF0A6995096501F",
      abi: CartelPunksABI,
    },
  },
  [Networks.Kovan]: {
    CartelPunks: {
      address: "0x92468D243209f4fbD9dF42256325EB4AaB1E345e",
      abi: CartelPunksABI,
    },
  },
};

export const currentNetwork = process.env.REACT_APP_NETWORK_ID;

export const baseApiUrl = process.env.REACT_APP_API_URL;

export function getContractInfo(name, chainId = null) {
  if (!chainId) chainId = currentNetwork;

  const contracts = CONTRACTS_BY_NETWORK?.[chainId];
  if (contracts) {
    return contracts?.[name];
  } else {
    return null;
  }
}

export function truncateWalletString(walletAddress) {
  if (!walletAddress) return walletAddress;
  const lengthStr = walletAddress.length;
  const startStr = walletAddress.substring(0, 7);
  const endStr = walletAddress.substring(lengthStr - 7, lengthStr);
  return startStr + "..." + endStr;
}

export function truncateHashString(txhash) {
  if (!txhash) return txhash;
  const lengthStr = txhash.length;
  const startStr = txhash.substring(0, 10);
  const endStr = txhash.substring(lengthStr - 10, lengthStr);
  return startStr + "..." + endStr;
}

export function getContractObj(name, chainId, provider) {
  const info = getContractInfo(name, chainId);
  return !!info && new Contract(info.address, info.abi, provider);
}

export function getContractObjWithAddress(
  name,
  chainId,
  provider,
  contractAddress
) {
  const info = getContractInfo(name, chainId);
  return !!info && new Contract(contractAddress, info.abi, provider);
}

export const shorter = (str) =>
  str?.length > 8 ? str.slice(0, 6) + "..." + str.slice(-4) : str;
