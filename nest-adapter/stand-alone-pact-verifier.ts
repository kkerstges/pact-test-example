const { Verifier, VerifierOptions } = require('@pact-foundation/pact');

const opts = {
    provider: "nest adapter",
    providerBaseUrl: "http://localhost:8080",
    pactBrokerUrl: "http://localhost:9292/",
    logLevel:"debug"
};

new Verifier(opts).verifyProvider().then(() => {
  console.log('Pact is verified.');
});