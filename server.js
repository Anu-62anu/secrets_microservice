// Entry point: starts the Express server
const app = require('./src/app');

const port = process.env.PORT || 8080;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`🚀 Looker Microservice running on http://${host}:${port}`);
});
