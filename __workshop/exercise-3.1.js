// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");


// Returns the current position of the ISS
const getIssPosition = () => {

  return request("http://api.open-notify.org/iss-now.json")
  .then((response) => JSON.parse(response))
  .then((parsedResponse) => {
    const lat = Number(parsedResponse.iss_position.latitude);
    const lng = Number(parsedResponse.iss_position.longitude);
    const position = {lat, lng};

    return position;
  })

  .catch((err) => console.log("Error: ", err))
};

getIssPosition().then((result) => console.log(result));


module.exports = { getIssPosition }

