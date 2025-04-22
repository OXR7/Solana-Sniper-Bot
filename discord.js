const { Connection, PublicKey, Keypair, VersionedTransaction, LAMPORTS_PER_SOL } = require('@solana/web3.js');
const { Client } = require('discord.js-selfbot-v13');
const bs58 = require('bs58');

const data = {
    token: '',
    rpc: '',
    privateKey: '',
    buyAmount: 1,
    slippage: 25,
    priorityFee: 0.01,
    channels: [
        ''
    ]
};

const connection = new Connection(data.rpc, 'processed');
const wallet = Keypair.fromSecretKey(bs58.decode(data.privateKey));
const client = new Client();
