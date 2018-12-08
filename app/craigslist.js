const Xray = require('x-ray');
const x = Xray();

module.exports.requestCL = function(city, searchText) {
  x(`https://${city}.craigslist.org/search/cta?query=${searchText}`, '.result-row', [{
    description: '.result-info a',
    price: '.result-price'
  }])
    .paginate('a.button.next')
    .write('results.json');
};
