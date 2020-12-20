const Healthchain = artifacts.require("Healthchain");

module.exports = function (deployer) {
    deployer.deploy(Healthchain);
};
