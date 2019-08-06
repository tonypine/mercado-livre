const express = require('express');
const path = require('path');
const request = require('request');
const rp = require('request-promise');
const cors = require('cors');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

// ITEMS
app.get('/api/items', (req, res) => {
  request(
    `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=4`,
    function(error, response, body) {
      let result = {};
      let jsonBody = JSON.parse(body);
      result.items = jsonBody.results.map(item => ({
        id: item.id,
        title: item.title,
        free_shipping: item.shipping.free_shipping,
        condition: item.condition,
        picture: item.thumbnail,
        price: {
          currency: '$',
          amount: item.price,
          decimals: 0
        }
      }));
      return res.send(result);
    }
  );
});

app.get('/api/items/:id', (req, res) => {
  const itemPromise = rp(`https://api.mercadolibre.com/items/${req.params.id}`);
  const itemDescriptionPromise = rp(
    `https://api.mercadolibre.com/items/${req.params.id}/description`
  );
  Promise.all([itemPromise, itemDescriptionPromise]).then(responses => {
    let result = {};
    const item = JSON.parse(responses[0]);
    const description = JSON.parse(responses[1]);

    result.item = {
      id: item.id,
      title: item.title,
      free_shipping: item.shipping.free_shipping,
      condition: item.condition,
      picture: item.pictures[0].url,
      description: description.plain_text,
      sold_quantity: item.sold_quantity,
      price: {
        currency: '$',
        amount: Math.floor(item.price),
        decimals: item.price
          .toFixed(2)
          .toString()
          .split('.')[1]
      }
    };

    rp(`https://api.mercadolibre.com/currencies/${item.currency_id}`).then(
      currenciesResponse => {
        const currencies = JSON.parse(currenciesResponse);
        result.item.price.currency = currencies.symbol;

        return res.send(result);
      }
    );
  });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
