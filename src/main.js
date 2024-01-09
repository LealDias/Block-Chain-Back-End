// Imports
const {Blockchain, Transaction} = require('./blockchain');

// Imports from Elliptic
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Keys
const myKey = ec.keyFromPrivate('1b1736b8ea4212e7d035cd9501fab0c10917c1b40f4ee4ab30fcc501b7a6d986');
const myWalletAddress = myKey.getPublic('hex');


// Execute Block Chain
let diegoCoin = new Blockchain();


const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);

tx1.signTransaction(myKey);
diegoCoin.addTransaction(tx1);


console.log('\n Starting the miner...');
diegoCoin.minePendingTransactions(myWalletAddress);

console.log('n\Balance of xavier is', diegoCoin.getBalanceOfAddress(myWalletAddress));

