const args = require('minimist')(process.argv.slice(2));
const craigsList = require('./craigslist').requestCL;
console.log(args);

if (!args.site) console.error('Must pass search site')

if (args) {
  if (!args.city || !args.search) return console.error('Craigslist needs a city and search text');
  return craigsList(args.city, args.search);
}
