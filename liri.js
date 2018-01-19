
require("dotenv").config();

var request = require("request");
var fs = require('fs');
var keys = require("./keys.js");
console.log(keys);

request("http://www.omdbapi.com/?t=blade+runner&y=&plot=short&apikey=trilogy", function(error, response, body) {

if (!error && response.statusCode === 200) {
	fs.writeFile("response.txt", JSON.stringify(response), function(err) {
		console.log('error', error);
	});
	console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    }

  });

var Spotify = require('node-spotify-api');

var spotify = new Spotify({ 
  id: keys.spotify.id,
  secret: keys.spotify.secret
})

spotify.search({ type: 'track', query: 'I want it that way' }, function(error, response, data) {
	if (error) {
		console.log('Error occurred: ' + error);
      }
	console.log(response.tracks.items);
		
});
   
   console.log(process.argv)
   var userInput = process.argv[2]
   var songName = process.argv[3]

   if (userInput === "my-tweets") {
    console.log("We will search for tweets");
    twitterLogic();

  } else if(userInput === "spotify-this-song") {
    console.log("We will search spotify");
    console.log(songName);
}
   function twitterLogic() {

   var Twitter = require('twitter');
 
   var client = new Twitter({
   consumer_key: keys.twitter.consumer_key,
   consumer_secret: keys.twitter.consumer_secret,
   access_token_key: keys.twitter.access_token_key,
   access_token_secret: keys.twitter.access_token_secret
});
 
  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

}

// require("dotenv").config();

// var results = require("./keys.js");


// console.log(results.spotify.secret);
// console.log(process.argv[2]);
// var userinput = process.argv[2];
// if (userinput === 'my-tweets') {
	// console.log("they typed my tweets");
// }else if (userinput === 'movie-this') {
// console.log("They typed movie-this");
