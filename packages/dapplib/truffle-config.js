require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift release still evil gloom drip equal gentle'; 
let testAccounts = [
"0xd822f6a41b65549ea463307c954e28c16652fa439f45284fb7364c5d7a0cadf0",
"0xe92bae14a06170dd0db25f726dcef57b04b34230fcc80bf479b66e767c2474c4",
"0x1591f08d4089e5242e9f7e02817b61afb2c901f7d5a6ce6b1ec686ce7a762ce5",
"0x28fc3d024685b34d23583730e70a9034330572a4b393909e40023b86254fb63c",
"0x9d0860f7af685225616af706d89fa588103381e9789ac5e0cba3e1745294c417",
"0x7de3bef7c80b1b5f5f0acaf19d4f1cdf403c72ba0ff5d64dd3068eb6ec062471",
"0x56292365e88c5b1b239811db4de448a05579cf1b970ac39807d0da247639adcf",
"0xa0a7cb482a2bdb0d454952b39190cc4840a9cb9db8a8691c597c0babc01f26f0",
"0xe9e39f9c3d48ddbe7798bb00d5aa04cc632a435f050ddf8b9e68cb8f4212fe2a",
"0xce490159c10e0343e2d40c19d121a4811d6dd33bf474d0c65f7c94c151b76c6a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
