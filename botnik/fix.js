/*
 * fix.js
 * Copyleft (ↄ) 2018 jkirchartz <me@jkirchartz.com>
 *
 * Distributed under terms of the NPL (Necessary Public License) license.
 */

var fs = require('fs');

fs.readFile('./countries.json', 'utf8', function(err, data) {
  if (err) { console.log(err); }

  var clist = JSON.parse(data);

  var countries = Object.keys(clist);

  var output = {'places': [] };

  for(var i in countries) {
    output.places.push('[country:' + countries[i] + '][city:' + clist[countries[i]].join(',') +']');
  }

  fs.writeFile('places.json', JSON.stringify(output, null, 2), 'utf8', function(){});
});
