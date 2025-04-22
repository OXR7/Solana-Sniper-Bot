const { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, VersionedTransaction } = require('@solana/web3.js');
const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const bs58 = require('bs58');
const readline = require('readline');

const apiID = 123;
const apiHash = '';
const session = new StringSession('');

const data = {
    rpc: '',
    privateKey: '',
    buyAmount: 1,
    slippage: 25,
    priorityFee: 0.01,
    groups: [
        ''
    ]
};

const connection = new Connection(data.rpc, 'processed');
const wallet = Keypair.fromSecretKey(bs58.decode(data.privateKey));
const client = new TelegramClient(session, apiID, apiHash, { connectionRetries: 5 });

