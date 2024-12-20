const http = require('http');
const { Client } = require('pg');

const port = process.env.PORT || 3000;

const client = new Client({
    user: 'postgres',
    host: 'postgres',
    database: 'postgres',
    password: 'password',
    port: 5432,
});

client.connect();

const server = http.createServer(async (req, res) => {
    try {
        const result = await client.query('SELECT NOW()');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Hello World, current time from DB: ${result.rows[0].now}`);
    } catch (err) {
        res.statusCode = 500;
        res.end(`Error connecting to DB: ${err.message}`);
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});