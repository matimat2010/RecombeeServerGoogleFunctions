require("dotenv").config();

const recombee = require("recombee-api-client");
const rqs = recombee.requests;

const client = new recombee.ApiClient(
    process.env.MY_DB,
    process.env.PRIVATE_TOKEN,
    {
        region: process.env.REGION,
    }
);

module.exports = {
    client: client,

    defaultCount: 1,

    rqs,
};
