const Verida = require("@verida/datastore");

const verida = new Verida({
  chain: "ethr",
  address: "example-address",
  privateKey: "example-key",
});

console.log(verida);