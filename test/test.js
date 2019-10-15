const assert = require('assert');
const https = require('https');

const serverUrl = 'https://www.w3schools.com/angular/customers_mysql.php';

describe('Customers', () => {

    describe('Retrieve customers', () => {

        it('should get 15 customers', function () {
            https.get(serverUrl, (resp) => {
                let data = '';

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    const res = JSON.parse(data);
                    console.log(res);
                    assert.equal(res.records.length, 15);
                });

            }).on('error', (err) => {
                console.log('Error: ' + err.message);
            });
        });

    });

});