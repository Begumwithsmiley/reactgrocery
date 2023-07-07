import { ethers } from "ethers";

const provider= new ethers.InfuraProvider("matic");

export default  async function Page(){
    const BlockNumber= await provider.getBlockNumber();
    return <h1>Block no: {BlockNumber}</h1>;
}