var http = require('http');
var querystring = require('querystring');

var access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNGRhYTcwYzRjNzAzZTk4ODNiZmQ2NyIsImlhdCI6MTUxNTAzOTM0NCwiZXhwIjoxNTE1MTI1NzQ0fQ.tcUDABlwSz_Yy8nshWl6xsejHVo5dD8rcXsISlikrx8';
var getData = {
        'User-Agent':       'Super Agent/0.0.1',
        'x-access-token':     access_token
     }

var options = {
    hostname: 'localhost',
    path: '/api/auth/me',
    headers: getData,
    port: 3000,
    method: 'GET',
};

var req = http.request(options, function (res) {
    console.log('STATUS:', res.statusCode);
    console.log('HEADERS:', JSON.stringify(res.headers));

    res.setEncoding('utf8');

    res.on('data', function (chunk) {
        console.log('BODY:', chunk);
    });

    res.on('end', function () {
        console.log('No more data in response.');
    });
});

req.on('error', function (e) {
    console.log('Problem with request:', e.message);
});

//req.write(getData);
req.end();

