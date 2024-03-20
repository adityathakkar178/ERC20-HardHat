async function main() {
    const [deployer] = await ethers.getSigners();
    const MyERC20 = await ethers.getContractFactory('MyERC20');
    const myERC20 = await MyERC20.deploy();
    console.log(myERC20.target);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
