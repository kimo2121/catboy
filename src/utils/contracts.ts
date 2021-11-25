import "@ethersproject/shims"
import { BigNumber, ethers } from "ethers";
import { getContractObj } from ".";
import { NFTMintEngineDetail } from "./typs";

export async function purchase(chainId, provider, account, numberOfTokens) {
    const CartelPunksContract = getContractObj('CartelPunks', chainId, provider);
    try {
        // const ownerAddress: string = await CartelPunksContract.owner();
        var nftPrice: BigNumber = await CartelPunksContract.PRICE();

        // if (ownerAddress.toLocaleLowerCase() === account.toLocaleLowerCase())
        //     nftPrice = BigNumber.from(0);

        const tx = await CartelPunksContract.purchase(numberOfTokens, {
            value: nftPrice.mul(numberOfTokens)
        });
        await tx.wait(1);

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function getEngineInfo(chainId, library) {
    const CartelPunksContract = getContractObj('CartelPunks', chainId, library);
    try {
        const [
            totalSupply,
            maxSupply,
            mintPrice,
            purchaseLimit,
        ] = await Promise.all([
            CartelPunksContract.totalSupply(),
            CartelPunksContract.CTPUNK_MAX(),
            CartelPunksContract.PRICE(),
            CartelPunksContract.PURCHASE_LIMIT(),
        ]);

        const nftMintDetail: NFTMintEngineDetail = {
            totalSupply: parseInt(totalSupply.toString()),
            maxSupply: parseInt(maxSupply.toString()),
            mintPrice: parseFloat(ethers.utils.formatEther(mintPrice)),
            purchaseLimit: parseInt(purchaseLimit.toString()),
        }

        return nftMintDetail;
    } catch (e) {
        console.log(e);
        return null;
    }
}