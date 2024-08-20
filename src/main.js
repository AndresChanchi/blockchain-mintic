const Block = require('./block');
const Blockchain = require('./blockchain.js');


let myBlockchain = new Blockchain()
myBlockchain.addBlock(new Block(1, '20/08/2100', {amount: 10} ));
myBlockchain.addBlock(new Block(2, '21/08/2100', {amount: 1} ));
myBlockchain.addBlock(new Block(3, '22/08/2100', {amount: 20} ));
myBlockchain.addBlock(new Block(4, '23/08/2100', {amount: 30} ));
myBlockchain.addBlock(new Block(5, '24/08/2100', {amount: 14} ));

console.log(JSON.stringify(myBlockchain, null, 4));
console.log('Is Blockchain valid?' + myBlockchain.isChainValid() );
