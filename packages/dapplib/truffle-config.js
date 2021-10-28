require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food wait cruise maze provide coral light army genius'; 
let testAccounts = [
"0x47039621b5e4c02d009c8357714249baba69bcc614c274791408e1af08627c39",
"0x2e8df4fef765f3d13f2d0061245642bb1d8cdfcdd0c13d37ae0854493fdfdc28",
"0x7b765cb88df13c6e0171c3edb12b8d6fc94558b50eaade4a2232d3536087342e",
"0x05804d182c4f0cd6e73881fc80ea92b2fc19095d24b0658efd8be01836735539",
"0x21c06200d76a6e9ca339429adcbeb7694b51ed9083426c7831756aea63953c4f",
"0x3b24f5d4031f63ca0972c089139d1dc1e42020c2bcade1f55075eb312a612de3",
"0xe41a5868067b6555e64c3c26fe150649ab332ffe82a04146bbc6b0ba50dc56f9",
"0xcd9d021dc3eecee06fb0ff1a1eef61bc898f9ade764075bd3afb8b932ae2d67d",
"0x792aecda361fa569445721f3dfcfaedf1ebd2e383106f34f91dba1045c390f43",
"0x836d912a8401135b0a4c1e2fa4b6a26a984de4876f3585244dae0fb126ea9eb2"
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
            version: '^0.8.0'
        }
    }
};

