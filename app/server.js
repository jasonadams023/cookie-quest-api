const app = require('./app');

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
	console.log(`Server Running at http://${hostname}:${port}/`);
});