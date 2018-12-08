const args = require('minimist')(process.argv.slice(2));
const Xray = require('x-ray');
const x = Xray();

x(args.url, '.result-row', [{
  description: '.result-info a',
  price: '.result-price'
}])
  .paginate('a.button.next')
  .write('results.json');