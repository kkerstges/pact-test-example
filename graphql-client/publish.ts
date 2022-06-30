const pact = require('@pact-foundation/pact-node');
const path = require('path');

let pactBrokerUrl = 'http://localhost:9292';

const opts = {
    pactFilesOrDirs: [path.resolve(__dirname, './pact/pacts/')],
    pactBroker: pactBrokerUrl,
    consumerVersion: "0.0.1"
};

pact
    .publishPacts(opts)
    .then(() => {
        console.log('Pact contract publishing complete!');
        console.log('');
        console.log(`Head over to ${pactBrokerUrl} and login with`);
        console.log('to see your published contracts.')
    })
    .catch(e => {
        console.log('Pact contract publishing failed: ', e)
    });