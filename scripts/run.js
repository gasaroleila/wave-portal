

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("waveContract deployed at", waveContract.address);
    console.log("Contract deployed by", owner);

    await waveContract.getTotalWaves();

    const waveTxn = await waveContract.wave()
    await waveTxn.wait();

    await waveContract.getTotalWaves();
}

const runMain = async () => {
    try {
        await main();
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


runMain();