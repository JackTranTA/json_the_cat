const request = require('request');
const breed = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log(`Cat breed not found. Please enter valid breed.`);
    return;
  }
  if (response.statusCode === 200) {
    console.log(`Breed description: ${data[0].description}`);
  }
});