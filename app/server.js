const app = require('./app');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, hostname, () => {
	console.log(`Server Running at http://${hostname}:${port}/`);
});