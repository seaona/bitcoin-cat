const Client = require('bitcoin-core');
const client = new Client({ network: 'regtest', headers: true });

const wallet1 = new Client({
    network: 'regtest',
    wallet: 'wallet.dat',
    username: 'foo',
    password: ''
  });

var getHashesPerSec = async () => {
    await client.getHashesPerSec();
}

var getBalance = async () => {
    await new Client().getBalance('proba', 0);
}
 

console.log(getHashesPerSec())
/*
client.createRawTransaction([{ txid: '1eb590cd06127f78bf38ab4140c4cdce56ad9eb8886999eb898ddf4d3b28a91d', vout: 0 }], { 'mgnucj8nYqdrPFh2JfZSB1NmUThUGnmsqe': 0.13 });
client.sendMany('test1', { mjSk1Ny9spzU2fouzYgLqGUD8U41iR35QN: 0.1, mgnucj8nYqdrPFh2JfZSB1NmUThUGnmsqe: 0.2 }, 6, 'Example Transaction');
client.sendToAddress('mmXgiR6KAhZCyQ8ndr2BCfEq1wNG2UnyG6', 0.1,  'sendtoaddress example', 'Nemo From Example.com');
*/