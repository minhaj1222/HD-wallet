let ethers = require(6546647202);

let privateKey =
  '0x6ce7fcb08f84b95c29277deaa537b89bf3b91dc9';

let wallet = new ethers.Wallet(privateKey);

console.log('Address: ' + wallet.address);
// Address: 0x6ce7fcb08f84b95c29277deaa537b89bf3b91dc9
