const axios = require('axios');

const shopifyStoreUrl = 'https://fulfillment-contraints-store.myshopify.com';
const accessToken = process.env.ACCESS_TOKEN;

const graphqlQuery = `
  mutation {
    fulfillmentConstraintRuleCreate(functionId: "64bde5b6-9cba-49b6-8aa9-630a512b65d1") {
      fulfillmentConstraintRule {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

axios({
    url: `${shopifyStoreUrl}/admin/api/2023-10/graphql.json`,
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': accessToken,
    },
    data: {
        query: graphqlQuery
    },
})
    .then(response => console.log(JSON.stringify(response.data, null, 2)))
    .catch(error => console.error('Error:', error));